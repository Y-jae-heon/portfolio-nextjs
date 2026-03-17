import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  reporter: [["list"]],
  webServer: {
    command: "npm run start -- --hostname 127.0.0.1 --port 3100",
    url: "http://127.0.0.1:3100",
    reuseExistingServer: false,
    stdout: "pipe",
    stderr: "pipe",
    timeout: 120 * 1000,
  },
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "off",
  },
  projects: [
    {
      name: "desktop-chromium",
      use: {
        browserName: "chromium",
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1600 },
      },
    },
    {
      name: "mobile-chromium",
      use: {
        browserName: "chromium",
        ...devices["Pixel 7"],
      },
    },
  ],
});
