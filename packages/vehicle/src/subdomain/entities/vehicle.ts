import { Identity } from "../../../../shared/domain/identity";
import { LicenseNumber } from "../valueobjects/licenseNumber";

interface VehicleProps {
    licenseNumber: LicenseNumber;
    type: string;
    owner: string;
}

export class Vehicle {
    private id: string | undefined
    // licenseNumber: LicenseNumber
    // type: string
    // owner: string
    private props: VehicleProps

    private constructor({id, props}: Record<any, any>) {
        this.validateProps(props)
        this.id = id
        this.props = props
        this.validate()
    }

    getId() {
        return this.id
    }

    getPropsValue() {
        // this.convertPropsToObject()
        return this.props
    }

    updateLicenseNumber(licenseNumber: string) {
        // guard against undefinedAndNull
        this.props.licenseNumber = LicenseNumber.create(licenseNumber)

    }

    static create(props: VehicleProps, id?: string) {
        // guard against undefinedAndNull

        const props_ = {
            licenseNumber: props.licenseNumber,
            type: props.type,
            owner: props.owner
        }

        const vehicle = new Vehicle({
            id: new Identity(id).getId(),
            props: props_,

        })

        return vehicle
    }


    validate() {}

    /**
     * Validate props should not be empty
     * and should be structurally correct (should be object, string, array ,....)
     * can be done in create or constructor(✅)
     */
    private validateProps(props: any): void { }
    

    /**
     * utility function for converting props to object
     * e.g if the props contains instance of other value objects
     * this will simply retrieve the values and return the objects
     * e.g in this first case the utility might not be useful
     *      interface Props {
     *      val: string
     *       }
     * but if the props references some other object, it is most useful
     *      interface Props {
     *          val: Props2
     *      }
     */
    private convertPropsToObject() {}

}