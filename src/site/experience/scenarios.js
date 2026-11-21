/*
 * The four business stories the walkthrough can tell.
 *
 * Each scenario has 8 beats. A beat describes, in one place, everything the visitor
 * sees at that moment: chapter copy, the phone screen, the lead's CRM card and the
 * owner view. Because they come from the same object they can never disagree
 * (validated by scripts/validate-site.mjs).
 *
 * Everything here is an ILLUSTRATIVE EXAMPLE: fictional businesses, people, times
 * and numbers. Nothing is presented as client proof.
 *
 * Service codes refer to src/catalog/catalog.js and are never shown to visitors.
 */

export const BEAT_LABELS = [
  'The friction',
  'The opportunity',
  'The response',
  'The next step',
  'The handoff',
  'The owner view',
  'Connected',
  'Your move',
]

// Plain-language roles, used when the story shows how the systems fit together
export const SYSTEM_ROLES = {
  GR: 'Brings the right people in, and shows which campaigns turn into real work.',
  BB: 'Makes the first impression worth trusting, and gives every visitor a clear next step.',
  CR: 'Answers, qualifies, books and follows up, so no inquiry goes quiet.',
  AO: 'Connects tools and people, assigns the work and keeps the owner informed.',
}

const SALES_STAGES = ['New', 'Responded', 'Qualified', 'Booked', 'Follow-up']
const OPS_STAGES = ['New', 'Matched', 'Assigned', 'Scheduled', 'Tracked']

export const SCENARIOS = [
  /* ---------------------------------------------------------------- */
  {
    id: 'response',
    problem: 'Leads come in, but we don’t respond fast enough.',
    problemSub: 'Missed calls, DMs, forms, follow-up gaps.',
    outcome: 'We’d begin by making sure every inquiry is answered, qualified and tracked.',
    business: 'Northside Roofing',
    customer: 'Homeowner, storm leak',
    systems: ['CR'],
    services: ['CR-01', 'CR-02', 'CR-03', 'CR-04', 'CR-05'],
    recommend: { system: 'CR', packageId: 'capture', label: 'Capture' },
    stages: SALES_STAGES,
    beats: [
      {
        title: 'This is where businesses lose opportunities.',
        body: 'A homeowner calls after hours about a leak. The phone is face down on the counter. Most people won’t leave a voicemail. They call the next roofer.',
        screen: {
          type: 'lock',
          time: '7:42',
          notes: [{ app: 'Phone', title: 'Missed call', text: '(555) 014-2290' }],
        },
        buzz: true,
      },
      {
        title: 'A customer reaches out.',
        body: 'Even though nobody answered, the call is captured the moment it comes in, with the number, time and source.',
        screen: {
          type: 'call',
          name: '(555) 014-2290',
          state: 'Missed call · 7:42 PM',
          sub: 'No voicemail left',
        },
        lead: {
          stage: 0,
          fields: { Source: 'Phone call', Received: '7:42 PM', Status: 'Unanswered' },
        },
      },
      {
        title: 'They get a response, even when you’re busy.',
        body: 'A text goes out automatically, in your business’s voice, following rules you set: hours, service area, what to say.',
        screen: {
          type: 'thread',
          contact: '(555) 014-2290',
          msgs: [
            { from: 'sys', text: 'Missed call · 7:42 PM' },
            {
              from: 'out',
              text: 'Hey, this is Northside Roofing. Sorry we missed your call! What can we help with?',
            },
          ],
        },
        lead: {
          stage: 1,
          fields: { Source: 'Phone call', Received: '7:42 PM', Reply: 'Automatic text sent' },
        },
      },
      {
        title: 'The conversation moves forward.',
        body: 'The AI receptionist asks the questions you would ask. Every answer lands on the customer’s record, so nobody has to ask twice.',
        screen: {
          type: 'thread',
          contact: '(555) 014-2290',
          msgs: [
            {
              from: 'out',
              text: 'Hey, this is Northside Roofing. Sorry we missed your call! What can we help with?',
            },
            { from: 'in', text: 'Got a leak over the kitchen after the storm.' },
            { from: 'out', text: 'We can help. What’s the address, and is it leaking right now?' },
            { from: 'in', text: '418 Elm St. Yes, dripping slowly.' },
          ],
          chips: ['Leak repair', 'Active leak', '418 Elm St'],
        },
        lead: {
          stage: 2,
          fields: { Service: 'Leak repair', Urgency: 'Active leak', Address: '418 Elm St' },
        },
      },
      {
        title: 'The right next step gets booked.',
        body: 'This job fits, so the customer picks an inspection time. If it didn’t, it would be flagged for you to call back instead. Nothing is forced.',
        screen: {
          type: 'thread',
          contact: '(555) 014-2290',
          msgs: [
            {
              from: 'out',
              text: 'I can get an inspector out tomorrow at 9:00 AM or 1:30 PM. Which works?',
            },
            { from: 'in', text: '9 works.' },
          ],
          card: { title: 'Inspection booked', text: 'Tomorrow · 9:00 AM · 418 Elm St' },
        },
        lead: {
          stage: 3,
          fields: {
            Service: 'Leak repair',
            Address: '418 Elm St',
            Appointment: 'Tomorrow 9:00 AM',
          },
        },
      },
      {
        title: 'Your team knows what happened and what comes next.',
        body: 'You get a short summary. The whole conversation sits on the customer’s record, and the job is on the calendar.',
        screen: {
          type: 'lock',
          time: '7:46',
          notes: [
            {
              app: 'Owner alert',
              title: 'New booking',
              text: 'Leak repair · 418 Elm St · Tomorrow 9:00 AM',
            },
          ],
        },
        lead: {
          stage: 3,
          fields: { Service: 'Leak repair', Appointment: 'Tomorrow 9:00 AM', Owner: 'Notified' },
        },
        owner: {
          note: 'Booked: leak inspection, tomorrow 9:00 AM',
          kpis: [
            ['New inquiries', '1'],
            ['Answered', '1'],
            ['Booked', '1'],
            ['Waiting on you', '0'],
          ],
        },
      },
      {
        title: 'One connected process. No loose ends.',
        body: 'Reminders, follow-up and a review request after the job all run on their own. Here’s the part of System-Based doing the work.',
        screen: {
          type: 'thread',
          contact: '(555) 014-2290',
          msgs: [
            {
              from: 'out',
              text: 'Reminder: your inspector arrives at 9:00 AM. Reply C to confirm.',
            },
            { from: 'in', text: 'C' },
            { from: 'sys', text: 'After the job · review request sent' },
          ],
        },
        lead: {
          stage: 4,
          fields: { Appointment: 'Confirmed', 'After the job': 'Review requested' },
        },
        owner: {
          note: 'Reminder confirmed. Review request scheduled.',
          kpis: [
            ['New inquiries', '1'],
            ['Answered', '1'],
            ['Booked', '1'],
            ['Waiting on you', '0'],
          ],
        },
        connected: true,
      },
      {
        title: 'Want this running in your business?',
        body: 'We’d start by making sure every call, text and form gets answered and tracked. That’s the Capture package. You can add more later.',
        screen: {
          type: 'summary',
          title: 'One inquiry, handled',
          rows: [
            ['Missed call', 'Captured'],
            ['First reply', 'Automatic'],
            ['Questions', 'Answered'],
            ['Inspection', 'Booked'],
            ['Owner', 'Informed'],
          ],
        },
        lead: {
          stage: 4,
          fields: { Appointment: 'Confirmed', 'After the job': 'Review requested' },
        },
        owner: {
          note: 'Every step recorded on one timeline.',
          kpis: [
            ['New inquiries', '1'],
            ['Answered', '1'],
            ['Booked', '1'],
            ['Waiting on you', '0'],
          ],
        },
        choose: true,
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'growth',
    problem: 'We need a more consistent flow of new customers.',
    problemSub: 'Advertising, lead generation, conversion.',
    outcome:
      'We’d build demand you can measure, and make sure every new lead is answered and tracked.',
    business: 'Brightline Painting',
    customer: 'Homeowner, 3 rooms',
    systems: ['GR', 'CR'],
    services: ['GR-01', 'GR-02', 'GR-04', 'CR-01', 'CR-04', 'CR-05'],
    recommend: { system: 'GR', packageId: 'pipeline', label: 'Pipeline' },
    stages: SALES_STAGES,
    beats: [
      {
        title: 'This is where businesses lose opportunities.',
        body: 'Referrals slow down and the calendar gets gaps. Money goes into ads, but nobody can say which ones turned into paying work.',
        screen: {
          type: 'lock',
          time: '9:15',
          notes: [
            { app: 'Calendar', title: 'Next week', text: '3 open days, no estimates booked' },
          ],
        },
        buzz: false,
      },
      {
        title: 'A customer finds you.',
        body: 'A homeowner planning a refresh sees a campaign built for one clear offer, and taps “Get a quote”.',
        screen: {
          type: 'ad',
          brand: 'Brightline Painting',
          headline: 'Interior painting, booked this month',
          text: 'Clean lines, on schedule, no mess left behind.',
          cta: 'Get a quote',
        },
        lead: {
          stage: 0,
          fields: { Source: 'Facebook ad', Campaign: 'Spring interior', Status: 'Clicked' },
        },
      },
      {
        title: 'They land somewhere built to convert.',
        body: 'The ad leads to a page made for that offer. The short form goes straight into your CRM, and a reply goes out right away.',
        screen: {
          type: 'landing',
          brand: 'Brightline Painting',
          headline: 'Get your interior quote',
          fields: [
            ['Name', 'Dana R.'],
            ['Rooms', '3'],
            ['When', 'Next month'],
          ],
          button: 'Request my quote',
          toast: 'Request sent · we’ll text you shortly',
        },
        lead: {
          stage: 1,
          fields: {
            Source: 'Facebook ad',
            Campaign: 'Spring interior',
            Reply: 'Automatic text sent',
          },
        },
      },
      {
        title: 'The conversation moves forward.',
        body: 'A quick text exchange confirms the details. The answers are saved, so the estimator walks in prepared.',
        screen: {
          type: 'thread',
          contact: 'Dana R.',
          msgs: [
            {
              from: 'out',
              text: 'Thanks Dana! Got your request for 3 rooms. Walls only, or trim and ceilings too?',
            },
            { from: 'in', text: 'Walls and trim. Living room, hall and one bedroom.' },
          ],
          chips: ['Interior', '3 rooms', 'Walls + trim'],
        },
        lead: {
          stage: 2,
          fields: { Job: 'Interior, 3 rooms', Scope: 'Walls + trim', Campaign: 'Spring interior' },
        },
      },
      {
        title: 'The right next step gets booked.',
        body: 'Dana picks an estimate slot that fits your calendar. Nobody spent the evening chasing a form fill.',
        screen: {
          type: 'thread',
          contact: 'Dana R.',
          msgs: [
            {
              from: 'out',
              text: 'We can do a free estimate Thursday at 4:30 PM or Saturday at 10 AM.',
            },
            { from: 'in', text: 'Thursday works.' },
          ],
          card: { title: 'Estimate booked', text: 'Thursday · 4:30 PM' },
        },
        lead: {
          stage: 3,
          fields: {
            Job: 'Interior, 3 rooms',
            Estimate: 'Thursday 4:30 PM',
            Campaign: 'Spring interior',
          },
        },
      },
      {
        title: 'You can see where the work came from.',
        body: 'The booking is tied to the campaign that produced it, so you know what to spend more on and what to switch off.',
        screen: {
          type: 'lock',
          time: '6:12',
          notes: [
            {
              app: 'Owner alert',
              title: 'Estimate booked',
              text: 'Dana R. · Thursday 4:30 PM · from Spring interior ad',
            },
          ],
        },
        lead: {
          stage: 3,
          fields: {
            Estimate: 'Thursday 4:30 PM',
            Source: 'Facebook ad',
            Campaign: 'Spring interior',
          },
        },
        owner: {
          note: 'Source of this booking: Spring interior campaign',
          kpis: [
            ['New leads', '1'],
            ['Answered', '1'],
            ['Booked', '1'],
            ['From ads', '1'],
          ],
        },
      },
      {
        title: 'One connected process. No loose ends.',
        body: 'Growth brings the inquiry in. Client Response makes sure it’s answered and booked. Reporting connects the two.',
        screen: {
          type: 'summary',
          title: 'Spring interior campaign',
          rows: [
            ['Ad', 'Clicked'],
            ['Landing page', 'Form sent'],
            ['First reply', 'Automatic'],
            ['Estimate', 'Booked'],
            ['Source', 'Tracked'],
          ],
        },
        lead: {
          stage: 4,
          fields: { Estimate: 'Reminder sent', Source: 'Facebook ad', Campaign: 'Spring interior' },
        },
        owner: {
          note: 'Campaign report updates as leads book.',
          kpis: [
            ['New leads', '1'],
            ['Answered', '1'],
            ['Booked', '1'],
            ['From ads', '1'],
          ],
        },
        connected: true,
      },
      {
        title: 'Want this running in your business?',
        body: 'We’d build campaigns and pages for your best offer, and make sure every new lead is answered and booked. That’s the Pipeline package.',
        screen: {
          type: 'summary',
          title: 'One new customer, traced',
          rows: [
            ['Campaign', 'Spring interior'],
            ['Lead', 'Captured'],
            ['Reply', 'Automatic'],
            ['Estimate', 'Booked'],
            ['Source', 'Known'],
          ],
        },
        lead: {
          stage: 4,
          fields: { Estimate: 'Reminder sent', Source: 'Facebook ad', Campaign: 'Spring interior' },
        },
        owner: {
          note: 'Spend and bookings on one view.',
          kpis: [
            ['New leads', '1'],
            ['Answered', '1'],
            ['Booked', '1'],
            ['From ads', '1'],
          ],
        },
        choose: true,
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'brand',
    problem: 'Our website or brand isn’t doing us justice.',
    problemSub: 'Trust, presentation, conversion, digital presence.',
    outcome:
      'We’d rebuild the first impression, then connect it so every visitor has a clear next step.',
    business: 'Ridgeway Auto Detail',
    customer: 'SUV owner',
    systems: ['BB', 'CR'],
    services: ['BB-01', 'BB-02', 'CR-01', 'CR-04', 'CR-05'],
    recommend: { system: 'BB', packageId: null, label: 'A Brand & Build project' },
    stages: SALES_STAGES,
    beats: [
      {
        title: 'This is where businesses lose opportunities.',
        body: 'People do find you. But an outdated site makes great work look small, and visitors leave without calling.',
        screen: {
          type: 'site',
          variant: 'old',
          brand: 'Ridgeway Auto Detail',
          headline: 'Welcome to our website!',
          sub: 'We do car detailing. Call for prices. Open Mon to Sat.',
          note: 'Concept: “before”',
        },
      },
      {
        title: 'A customer is comparing options.',
        body: 'They have three tabs open. Whoever looks most credible and easiest to book usually gets the call.',
        screen: {
          type: 'site',
          variant: 'old',
          brand: 'Ridgeway Auto Detail',
          headline: 'Welcome to our website!',
          sub: 'We do car detailing. Call for prices. Open Mon to Sat.',
          note: 'Concept: “before”',
        },
        lead: {
          stage: 0,
          fields: { Visitor: 'Comparing 3 detailers', Status: 'Not yet in touch' },
        },
      },
      {
        title: 'Your brand earns the trust.',
        body: 'A sharp identity and a fast page show the quality of the work, what it costs to start, and one clear way to book.',
        screen: {
          type: 'site',
          variant: 'new',
          brand: 'Ridgeway',
          headline: 'Showroom finish, in your driveway.',
          sub: 'Full details from a fixed starting price. Book in under a minute.',
          cta: 'Book a detail',
          note: 'Concept: “after”',
        },
        lead: { stage: 0, fields: { Visitor: 'Viewing services', Status: 'Not yet in touch' } },
      },
      {
        title: 'The customer reaches out.',
        body: 'A short form asks only what matters. The request goes straight into the same response system as calls and texts.',
        screen: {
          type: 'landing',
          brand: 'Ridgeway',
          headline: 'Book a detail',
          fields: [
            ['Package', 'Full detail'],
            ['Vehicle', 'SUV'],
            ['Day', 'Saturday'],
          ],
          button: 'Request booking',
          toast: 'Request sent · confirming your time',
        },
        lead: {
          stage: 1,
          fields: { Source: 'Website form', Package: 'Full detail', Vehicle: 'SUV' },
        },
      },
      {
        title: 'The right next step gets booked.',
        body: 'The customer gets a confirmation with the time and what to expect, without anyone stopping work to reply.',
        screen: {
          type: 'thread',
          contact: 'Ridgeway',
          msgs: [
            {
              from: 'out',
              text: 'Thanks for booking with Ridgeway! Saturday 10:00 AM works for a full SUV detail.',
            },
            { from: 'in', text: 'Perfect, see you then.' },
          ],
          card: { title: 'Detail booked', text: 'Saturday · 10:00 AM · Full detail' },
        },
        lead: {
          stage: 3,
          fields: { Source: 'Website form', Booking: 'Saturday 10:00 AM', Package: 'Full detail' },
        },
      },
      {
        title: 'Your team knows what happened and what comes next.',
        body: 'The booking, the vehicle and the package are on one record. You can see which pages bring in bookings.',
        screen: {
          type: 'lock',
          time: '11:03',
          notes: [
            {
              app: 'Owner alert',
              title: 'New booking',
              text: 'Full detail · SUV · Saturday 10:00 AM · from website',
            },
          ],
        },
        lead: {
          stage: 3,
          fields: { Booking: 'Saturday 10:00 AM', Source: 'Website form', Owner: 'Notified' },
        },
        owner: {
          note: 'Booked from the new services page',
          kpis: [
            ['Site inquiries', '1'],
            ['Answered', '1'],
            ['Booked', '1'],
            ['Waiting on you', '0'],
          ],
        },
      },
      {
        title: 'One connected process. No loose ends.',
        body: 'Brand & Build makes the first impression. Client Response turns the visit into a booked job. Each one does its part.',
        screen: {
          type: 'summary',
          title: 'From visit to booking',
          rows: [
            ['First impression', 'Credible'],
            ['Next step', 'Obvious'],
            ['Request', 'Captured'],
            ['Booking', 'Confirmed'],
            ['Owner', 'Informed'],
          ],
        },
        lead: {
          stage: 4,
          fields: {
            Booking: 'Reminder sent',
            Source: 'Website form',
            'After the job': 'Review requested',
          },
        },
        owner: {
          note: 'Website and bookings on one view.',
          kpis: [
            ['Site inquiries', '1'],
            ['Answered', '1'],
            ['Booked', '1'],
            ['Waiting on you', '0'],
          ],
        },
        connected: true,
      },
      {
        title: 'Want this running in your business?',
        body: 'We’d start with a one-time Brand & Build project, quoted after a short call. If you want it to keep booking jobs, it can connect to Client Response.',
        screen: {
          type: 'summary',
          title: 'A brand that books',
          rows: [
            ['Identity', 'Rebuilt'],
            ['Website', 'Fast, clear'],
            ['Form', 'Connected'],
            ['Replies', 'Automatic'],
            ['Results', 'Visible'],
          ],
        },
        lead: {
          stage: 4,
          fields: {
            Booking: 'Reminder sent',
            Source: 'Website form',
            'After the job': 'Review requested',
          },
        },
        owner: {
          note: 'Website and bookings on one view.',
          kpis: [
            ['Site inquiries', '1'],
            ['Answered', '1'],
            ['Booked', '1'],
            ['Waiting on you', '0'],
          ],
        },
        choose: true,
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'ops',
    problem: 'Our team and tools aren’t connected.',
    problemSub: 'Manual tasks, scattered information, no visibility.',
    outcome:
      'We’d map how work moves today, then connect the tools so every inquiry has an owner and a next step.',
    business: 'Harbor Kitchen & Bath',
    customer: 'Returning customer, remodel quote',
    systems: ['AO', 'CR'],
    services: ['AO-01', 'AO-02', 'AO-03', 'CR-05'],
    recommend: { system: 'AO', packageId: 'command', label: 'Command, or a custom scope' },
    stages: OPS_STAGES,
    beats: [
      {
        title: 'This is where businesses lose opportunities.',
        body: 'Inquiries arrive in email, texts and a web form. Notes live in three apps. Nobody is sure who is following up.',
        screen: {
          type: 'lock',
          time: '8:58',
          notes: [
            { app: 'Email', title: 'Quote request', text: 'Bathroom remodel, can someone call?' },
            { app: 'Messages', title: 'Team', text: 'Did anyone get back to the remodel lady?' },
          ],
        },
        buzz: true,
      },
      {
        title: 'An inquiry arrives.',
        body: 'A request for a bathroom remodel quote comes in through the website, at the same time as five other things.',
        screen: {
          type: 'record',
          title: 'New web inquiry',
          badge: 'New',
          rows: [
            ['From', 'Maria G.'],
            ['Request', 'Bathroom remodel quote'],
            ['Received', '8:58 AM'],
          ],
        },
        lead: {
          stage: 0,
          fields: { Source: 'Website form', Request: 'Bathroom remodel', Owner: 'Unassigned' },
        },
      },
      {
        title: 'Everything lands on one record.',
        body: 'The system recognises Maria as a past customer and attaches her history, so nobody starts from zero.',
        screen: {
          type: 'record',
          title: 'Maria G.',
          badge: 'Matched',
          rows: [
            ['History', '2 past jobs'],
            ['Last job', 'Kitchen backsplash'],
            ['Request', 'Bathroom remodel quote'],
          ],
        },
        lead: {
          stage: 1,
          fields: { Customer: 'Returning', History: '2 past jobs', Owner: 'Unassigned' },
        },
      },
      {
        title: 'The right person gets the work.',
        body: 'An agent assigns it using your rules, creates the task with a due time and gives the estimator a short summary.',
        screen: {
          type: 'task',
          title: 'Call Maria about remodel quote',
          badge: 'Assigned',
          rows: [
            ['Assigned to', 'Chris (estimator)'],
            ['Due', 'Today, 3:00 PM'],
            ['Summary', 'Returning customer, bath remodel'],
          ],
        },
        lead: {
          stage: 2,
          fields: { Owner: 'Chris', Due: 'Today 3:00 PM', Request: 'Bathroom remodel' },
        },
      },
      {
        title: 'The handoff is clean.',
        body: 'Chris calls, books a site visit and updates the record once. Everyone who needs to know, knows.',
        screen: {
          type: 'thread',
          contact: 'Team · Jobs',
          msgs: [
            { from: 'in', text: 'Chris: Called Maria. Site visit Monday 10 AM.' },
            { from: 'sys', text: 'Record updated · visit added to calendar' },
          ],
          card: { title: 'Site visit scheduled', text: 'Monday · 10:00 AM · Chris' },
        },
        lead: {
          stage: 3,
          fields: { Owner: 'Chris', Visit: 'Monday 10:00 AM', Request: 'Bathroom remodel' },
        },
      },
      {
        title: 'You see the whole business at a glance.',
        body: 'The owner view shows what came in, who has it and what is stuck, with an alert only when something needs you.',
        screen: {
          type: 'lock',
          time: '4:10',
          notes: [
            {
              app: 'Owner alert',
              title: 'Needs attention',
              text: '1 kitchen quote waiting over 2 days',
            },
          ],
        },
        lead: {
          stage: 3,
          fields: { Owner: 'Chris', Visit: 'Monday 10:00 AM', Status: 'On track' },
        },
        owner: {
          note: 'Alert: 1 quote waiting over 2 days',
          kpis: [
            ['New today', '1'],
            ['Assigned', '1'],
            ['Scheduled', '1'],
            ['Overdue', '1'],
          ],
        },
      },
      {
        title: 'One connected process. No loose ends.',
        body: 'AI & Operations connects the tools and people. Client Response keeps every inquiry on the record. We confirm which of your tools can connect during scoping.',
        screen: {
          type: 'summary',
          title: 'One request, one owner',
          rows: [
            ['Inquiry', 'Captured'],
            ['History', 'Attached'],
            ['Owner', 'Assigned'],
            ['Visit', 'Scheduled'],
            ['Exceptions', 'Flagged'],
          ],
        },
        lead: { stage: 4, fields: { Owner: 'Chris', Visit: 'Monday 10:00 AM', Status: 'Tracked' } },
        owner: {
          note: 'Every handoff recorded.',
          kpis: [
            ['New today', '1'],
            ['Assigned', '1'],
            ['Scheduled', '1'],
            ['Overdue', '1'],
          ],
        },
        connected: true,
      },
      {
        title: 'Want this running in your business?',
        body: 'We’d map how work moves today, then connect the pieces. Many businesses start with Command. Bigger builds are scoped as a custom project.',
        screen: {
          type: 'summary',
          title: 'A team in sync',
          rows: [
            ['Inquiries', 'One place'],
            ['Assignment', 'Automatic'],
            ['Tasks', 'Due times'],
            ['Owner view', 'Live'],
            ['Busywork', 'Reduced'],
          ],
        },
        lead: { stage: 4, fields: { Owner: 'Chris', Visit: 'Monday 10:00 AM', Status: 'Tracked' } },
        owner: {
          note: 'Every handoff recorded.',
          kpis: [
            ['New today', '1'],
            ['Assigned', '1'],
            ['Scheduled', '1'],
            ['Overdue', '1'],
          ],
        },
        choose: true,
      },
    ],
  },
]

export const scenario = (id) => SCENARIOS.find((s) => s.id === id) || SCENARIOS[0]
