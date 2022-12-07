import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {PhysicalAddress} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CompanyDetail implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The address property */
    private _address?: PhysicalAddress | undefined;
    /** Department Name within a company. */
    private _department?: string | undefined;
    /** Company name. */
    private _displayName?: string | undefined;
    /** Office Location of the person referred to. */
    private _officeLocation?: string | undefined;
    /** Pronunciation guide for the company name. */
    private _pronunciation?: string | undefined;
    /** Link to the company home page. */
    private _webUrl?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the address property value. The address property
     * @returns a physicalAddress
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The address property
     * @param value Value to set for the address property.
     */
    public set address(value: PhysicalAddress | undefined) {
        this._address = value;
    };
    /**
     * Instantiates a new companyDetail and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the department property value. Department Name within a company.
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Sets the department property value. Department Name within a company.
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        this._department = value;
    };
    /**
     * Gets the displayName property value. Company name.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Company name.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "address": n => { this.address = n.getObjectValue<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
            "department": n => { this.department = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "officeLocation": n => { this.officeLocation = n.getStringValue(); },
            "pronunciation": n => { this.pronunciation = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the officeLocation property value. Office Location of the person referred to.
     * @returns a string
     */
    public get officeLocation() {
        return this._officeLocation;
    };
    /**
     * Sets the officeLocation property value. Office Location of the person referred to.
     * @param value Value to set for the officeLocation property.
     */
    public set officeLocation(value: string | undefined) {
        this._officeLocation = value;
    };
    /**
     * Gets the pronunciation property value. Pronunciation guide for the company name.
     * @returns a string
     */
    public get pronunciation() {
        return this._pronunciation;
    };
    /**
     * Sets the pronunciation property value. Pronunciation guide for the company name.
     * @param value Value to set for the pronunciation property.
     */
    public set pronunciation(value: string | undefined) {
        this._pronunciation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<PhysicalAddress>("address", this.address);
        writer.writeStringValue("department", this.department);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("officeLocation", this.officeLocation);
        writer.writeStringValue("pronunciation", this.pronunciation);
        writer.writeStringValue("webUrl", this.webUrl);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the webUrl property value. Link to the company home page.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Link to the company home page.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
