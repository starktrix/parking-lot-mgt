interface LicenseNumberProps {
    licenseNo: string
}

export class LicenseNumber {
    private licenseNo: string

    private constructor({licenseNo}: LicenseNumberProps) {
        this.licenseNo = licenseNo
    }
    
    static create(licenseNo: string) {
        if (!this.isValid()) {
            // return error
        }
        return new LicenseNumber({licenseNo})
    }

    static isValid() {
        return true
    }

    toValue(): string {
        return this.licenseNo
    }
}