// Google Analytics event tracking

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

/**
 * Track a custom event in Google Analytics
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

/**
 * Track contact form submission
 */
export const trackContactFormSubmission = (method: string = 'email') => {
  trackEvent('contact_form_submit', {
    event_category: 'Contact',
    event_label: method,
    value: 1,
  })
}

/**
 * Track phone number click
 */
export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('phone_click', {
    event_category: 'Contact',
    event_label: phoneNumber,
    value: 1,
  })
}

/**
 * Track email click
 */
export const trackEmailClick = (email: string) => {
  trackEvent('email_click', {
    event_category: 'Contact',
    event_label: email,
    value: 1,
  })
}

/**
 * Track practice area view
 */
export const trackPracticeAreaView = (practiceArea: string) => {
  trackEvent('practice_area_view', {
    event_category: 'Engagement',
    event_label: practiceArea,
  })
}

/**
 * Track blog post view
 */
export const trackBlogPostView = (postTitle: string, postSlug: string) => {
  trackEvent('blog_post_view', {
    event_category: 'Content',
    event_label: postTitle,
    post_slug: postSlug,
  })
}

/**
 * Track consultation request
 */
export const trackConsultationRequest = () => {
  trackEvent('consultation_request', {
    event_category: 'Lead',
    value: 1,
  })
}
