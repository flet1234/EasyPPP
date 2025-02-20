export const subscriptionTiers = {
  Free: {
    name: "Free",
    priceInCents: 0,
    maxNumberOfProducts: 1,
    maxNumberOfVisits: 5000,
    canAccessAnalytics: false,
    canCustomizeBanner: false,
    canRemoveBranding: false,
    stripePriceId: undefined
  },
  Basic: {
    name: "Basic",
    priceInCents: 990, // $9.90
    maxNumberOfProducts: 10,
    maxNumberOfVisits: 25000,
    canAccessAnalytics: true,
    canCustomizeBanner: false,
    canRemoveBranding: false,
    stripePriceId: "basic_price_id"
  },
  Pro: {
    name: "Pro",
    priceInCents: 2990, // $29.90
    maxNumberOfProducts: 50,
    maxNumberOfVisits: 100000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: false,
    stripePriceId: "pro_price_id"
  },
  Enterprise: {
    name: "Enterprise",
    priceInCents: 9990, // $99.90
    maxNumberOfProducts: 100,
    maxNumberOfVisits: 1000000,
    canAccessAnalytics: true,
    canCustomizeBanner: true,
    canRemoveBranding: true,
    stripePriceId: "enterprise_price_id"
  }
} as const

export const subscriptionTiersInOrder = [
    subscriptionTiers.Free,
    subscriptionTiers.Basic,
    subscriptionTiers.Pro,
    subscriptionTiers.Enterprise
] as const