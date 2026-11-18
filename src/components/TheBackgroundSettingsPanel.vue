<template>
  <aside class="card bg-base-100 shadow-sm">
    <div class="p-5 flex flex-col gap-3">
      <button class="btn btn-neutral btn-sm" @click="applySystemBasedPreset">
        {{ t('background.systemBasedPreset') }}
      </button>

      <div class="divider"></div>

      <section>
        <AppCheckbox v-model="imgBackground" :label="t('background.imageBackground')" />
        <div v-if="imgBackground" class="flex flex-col gap-1 mt-5">
          <label class="input">
            <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              </g>
            </svg>
            <input
              type="text"
              class="grow"
              :placeholder="t('background.imagePlaceholder')"
              :value="currentFileSelected"
              @click="onClickFileInput"
            />
            <input
              ref="fileInput"
              type="file"
              class="hidden"
              accept="image/*"
              @change="onImageSelected"
            />
          </label>
        </div>
      </section>

      <div class="divider"></div>

      <section>
        <AppCheckbox v-model="colorBackground" :label="t('background.colorBackground')" />
        <div v-if="colorBackground" class="flex flex-col gap-1 mt-5">
          <div class="grid grid-cols-[50px_1fr_50px] gap-2 items-center mb-2">
            <label style="font-size: 0.8rem">{{ t('background.color') }}</label>
            <input
              v-model="backgroundColor1Proxy"
              type="color"
              style="width: 100%; height: 30px; border-radius: 0.3rem; border: 1px solid #ddd"
            />
            <span></span>
          </div>
          <div class="grid grid-cols-[50px_1fr_50px] gap-2 items-center mb-2">
            <label style="font-size: 0.8rem">{{ t('background.color') }}</label>
            <input
              v-model="backgroundColor2Proxy"
              type="color"
              style="width: 100%; height: 30px; border-radius: 0.3rem; border: 1px solid #ddd"
            />
            <span></span>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <section>
        <div class="flex flex-col gap-1">
          <AppSlider
            v-model.number="backgroundSettings.exposureCompensation"
            min="0.1"
            max="3"
            step="0.1"
            :label="t('background.exposure')"
            :optional="backgroundSettings.exposureCompensation.toFixed(1)"
          />
          <AppSlider
            v-if="!imgBackground"
            v-model.number="backgroundSettings.backgroundBrightness"
            min="0.1"
            max="2"
            step="0.1"
            :label="t('background.brightness')"
            :optional="backgroundSettings.backgroundBrightness.toFixed(1)"
          />
        </div>
      </section>
    </div>
  </aside>
</template>

<script setup>
import { backgroundSettings } from '@/states/background-settings-state.js'
import AppSlider from '@/components/AppSlider.vue'
import AppCheckbox from '@/components/AppCheckbox.vue'
import { computed, ref, useTemplateRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { hexToHSL, hslToHex } from '@/helpers/colors-helper.js'
import { lightingSettings } from '@/states/lighting-settings-state.js'

const { t } = useI18n()

const imgBackground = ref(false)
const colorBackground = ref(true)
const fileInput = useTemplateRef('fileInput')
const currentFileSelected = ref('')

watch(imgBackground, (value) => {
  if (!value) {
    backgroundSettings.backgroundImage = null
    currentFileSelected.value = ''
    if (fileInput.value) {
      fileInput.value.value = ''
    }
  }
})

const onClickFileInput = () => {
  if (!fileInput.value) return

  fileInput.value.click()
}

const onImageSelected = () => {
  if (!fileInput.value || !fileInput.value.files) return

  const file = fileInput.value.files[0]
  if (!file) return

  currentFileSelected.value = file.name

  const reader = new FileReader()
  reader.onload = (e) => {
    if (e.target && e.target.result) {
      backgroundSettings.backgroundImage = e.target.result
    }
  }
  reader.readAsDataURL(file)
}

// System Based look: graphite-to-black studio, cool white key light, silver rim
const applySystemBasedPreset = () => {
  imgBackground.value = false
  colorBackground.value = true
  backgroundSettings.color1 = 'hsl(220, 6%, 7%)'
  backgroundSettings.color2 = 'hsl(240, 4%, 1%)'
  backgroundSettings.backgroundBrightness = 1.0
  backgroundSettings.exposureCompensation = 1.0

  lightingSettings.ambientIntensity = 0.12
  lightingSettings.directionalEnabled = true
  lightingSettings.directionalColor = '#f4f6ff'
  lightingSettings.directionalIntensity = 4
  lightingSettings.directionalPosition.x = -2.5
  lightingSettings.directionalPosition.y = 2
  lightingSettings.directionalPosition.z = 1.5
  lightingSettings.spotEnabled = true
  lightingSettings.spotColor = '#dfe6ff'
  lightingSettings.spotIntensity = 6
  lightingSettings.spotPosition.x = 2.5
  lightingSettings.spotPosition.y = 1.5
  lightingSettings.spotPosition.z = -2
}

const backgroundColor1Proxy = computed({
  get: () => {
    const hslString = backgroundSettings.color1

    const match = hslString.match(/hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/)
    if (match) {
      const h = parseInt(match[1], 10)
      const s = parseInt(match[2], 10)
      const l = parseInt(match[3], 10)
      return hslToHex(h, s, l)
    }

    return null
  },
  set: (value) => {
    backgroundSettings.color1 = hexToHSL(value)
  },
})

const backgroundColor2Proxy = computed({
  get: () => {
    const hslString = backgroundSettings.color2

    const match = hslString.match(/hsl\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/)
    if (match) {
      const h = parseInt(match[1], 10)
      const s = parseInt(match[2], 10)
      const l = parseInt(match[3], 10)
      return hslToHex(h, s, l)
    }

    return null
  },
  set: (value) => {
    backgroundSettings.color2 = hexToHSL(value)
  },
})
</script>
