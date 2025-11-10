const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config
const config = {
  // key: `api_${env}_${version}`
  [`api_${env}_${version}`]: `https://api.example.com/${env}/${version}`,

  // key cho từng feature: `feature_${featureName}`
  ...features.reduce((acc, feature) => {
    acc[`feature_${feature}`] = true;
    return acc;
  }, {}),

  // method: getProductionConfig()
  [`get${env.charAt(0).toUpperCase() + env.slice(1)}Config`]() {
    return `Config for ${env} - ${version}`;
  },
};

console.log(config);
console.log(config.getProductionConfig());
