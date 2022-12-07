import {Entity} from '../';
import {createInformationProtectionFromDiscriminatorValue} from './createInformationProtectionFromDiscriminatorValue';
import {InformationProtection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Security extends Entity implements Parsable {
    /** The informationProtection property */
    private _informationProtection?: InformationProtection | undefined;
    /**
     * Instantiates a new security and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "informationProtection": n => { this.informationProtection = n.getObjectValue<InformationProtection>(createInformationProtectionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the informationProtection property value. The informationProtection property
     * @returns a informationProtection
     */
    public get informationProtection() {
        return this._informationProtection;
    };
    /**
     * Sets the informationProtection property value. The informationProtection property
     * @param value Value to set for the informationProtection property.
     */
    public set informationProtection(value: InformationProtection | undefined) {
        this._informationProtection = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<InformationProtection>("informationProtection", this.informationProtection);
    };
}
