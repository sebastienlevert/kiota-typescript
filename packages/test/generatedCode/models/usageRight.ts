import {Entity} from './index';
import {UsageRightState} from './usageRightState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UsageRight extends Entity implements Parsable {
    /** Product id corresponding to the usage right. */
    private _catalogId?: string | undefined;
    /** Identifier of the service corresponding to the usage right. */
    private _serviceIdentifier?: string | undefined;
    /** The state property */
    private _state?: UsageRightState | undefined;
    /**
     * Gets the catalogId property value. Product id corresponding to the usage right.
     * @returns a string
     */
    public get catalogId() {
        return this._catalogId;
    };
    /**
     * Sets the catalogId property value. Product id corresponding to the usage right.
     * @param value Value to set for the catalogId property.
     */
    public set catalogId(value: string | undefined) {
        this._catalogId = value;
    };
    /**
     * Instantiates a new usageRight and sets the default values.
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
            "catalogId": n => { this.catalogId = n.getStringValue(); },
            "serviceIdentifier": n => { this.serviceIdentifier = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<UsageRightState>(UsageRightState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("catalogId", this.catalogId);
        writer.writeStringValue("serviceIdentifier", this.serviceIdentifier);
        writer.writeEnumValue<UsageRightState>("state", this.state);
    };
    /**
     * Gets the serviceIdentifier property value. Identifier of the service corresponding to the usage right.
     * @returns a string
     */
    public get serviceIdentifier() {
        return this._serviceIdentifier;
    };
    /**
     * Sets the serviceIdentifier property value. Identifier of the service corresponding to the usage right.
     * @param value Value to set for the serviceIdentifier property.
     */
    public set serviceIdentifier(value: string | undefined) {
        this._serviceIdentifier = value;
    };
    /**
     * Gets the state property value. The state property
     * @returns a usageRightState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The state property
     * @param value Value to set for the state property.
     */
    public set state(value: UsageRightState | undefined) {
        this._state = value;
    };
}
