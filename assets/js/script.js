(function () {
  const script = document.createElement("script");
  script.src =
    "https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015";
  script.onload = () => {
    console.log("Analytics loaded successfully.");
  };
  script.onerror = () => {
    console.log("Analytics script blocked by ad blocker.");
  };
  document.head.appendChild(script);
})();
