import { expect, test } from "@playwright/test";

test.describe("portfolio page", () => {
  test("핵심 섹션과 CTA가 렌더링된다", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: "제품 관점으로 문제를 정의하고, 신뢰할 수 있는 인터페이스와 시스템으로 실행까지 연결합니다.",
      }),
    ).toBeVisible();

    await expect(page.getByRole("link", { name: "프로젝트 보기" })).toBeVisible();
    await expect(page.getByRole("link", { name: "연락하기" }).first()).toBeVisible();
    await expect(page.getByRole("banner")).toBeVisible();

    await expect(page.locator("#projects")).toContainText("대표 프로젝트");
    await expect(page.locator("#capabilities")).toContainText("역량 맵");
    await expect(page.locator("#timeline")).toContainText("경력");
    await expect(page.locator("#philosophy")).toContainText("문제 해결 방식");
    await expect(page.locator("#contact")).toContainText("연락");
  });

  test("영문 UI가 과도하게 남아 있지 않고 한국어 중심으로 보인다", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("프로젝트 보기")).toBeVisible();
    await expect(page.locator("#projects")).toContainText("대표 프로젝트");
    await expect(page.getByText("상세 보기").first()).toBeVisible();
    await expect(page.getByText("트레이드오프").first()).toBeVisible();
    await expect(page.locator("body")).not.toContainText("View case study");
    await expect(page.locator("body")).not.toContainText("Featured Projects");
    await expect(page.locator("body")).not.toContainText("Professional Summary");
  });

  test("테마 토글이 동작하고 선택이 유지된다", async ({ page }) => {
    await page.goto("/");

    const html = page.locator("html");
    const toggle = page.getByRole("button", { name: /테마로 전환/ });

    await expect(html).toHaveAttribute("data-theme", /light|dark/);
    const initialTheme = await html.getAttribute("data-theme");

    await toggle.click();

    const toggledTheme = initialTheme === "dark" ? "light" : "dark";
    await expect(html).toHaveAttribute("data-theme", toggledTheme);

    await page.reload();
    await expect(html).toHaveAttribute("data-theme", toggledTheme);
  });

  test("저장된 테마가 없으면 시스템 테마를 따른다", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });

  test("데스크톱과 모바일 스크린샷을 생성한다", async ({ page }, testInfo) => {
    await page.goto("/");
    await page.screenshot({
      path: testInfo.outputPath("portfolio-full.png"),
      fullPage: true,
    });
  });
});
