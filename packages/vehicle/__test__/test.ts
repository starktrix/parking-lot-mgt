import { LicenseNumber } from "@domain/valueobjects/licenseNumber"

describe("sample test", () => {
    test("Sample", () => {
        expect(true).toBe(true)
        const no = LicenseNumber.create("ariie")
        expect(no.toValue()).toBe("ariie")
    })
})