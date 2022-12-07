import {AllowedAudiences} from './allowedAudiences';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createInferenceDataFromDiscriminatorValue} from './createInferenceDataFromDiscriminatorValue';
import {createPersonDataSourcesFromDiscriminatorValue} from './createPersonDataSourcesFromDiscriminatorValue';
import {Entity, IdentitySet, InferenceData, PersonDataSources} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ItemFacet extends Entity implements Parsable {
    /** The allowedAudiences property */
    private _allowedAudiences?: AllowedAudiences | undefined;
    /** The createdBy property */
    private _createdBy?: IdentitySet | undefined;
    /** Provides the dateTimeOffset for when the entity was created. */
    private _createdDateTime?: Date | undefined;
    /** The inference property */
    private _inference?: InferenceData | undefined;
    /** The isSearchable property */
    private _isSearchable?: boolean | undefined;
    /** The lastModifiedBy property */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** Provides the dateTimeOffset for when the entity was created. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The source property */
    private _source?: PersonDataSources | undefined;
    /**
     * Gets the allowedAudiences property value. The allowedAudiences property
     * @returns a allowedAudiences
     */
    public get allowedAudiences() {
        return this._allowedAudiences;
    };
    /**
     * Sets the allowedAudiences property value. The allowedAudiences property
     * @param value Value to set for the allowedAudiences property.
     */
    public set allowedAudiences(value: AllowedAudiences | undefined) {
        this._allowedAudiences = value;
    };
    /**
     * Instantiates a new itemFacet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. Provides the dateTimeOffset for when the entity was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Provides the dateTimeOffset for when the entity was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedAudiences": n => { this.allowedAudiences = n.getEnumValue<AllowedAudiences>(AllowedAudiences); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "inference": n => { this.inference = n.getObjectValue<InferenceData>(createInferenceDataFromDiscriminatorValue); },
            "isSearchable": n => { this.isSearchable = n.getBooleanValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "source": n => { this.source = n.getObjectValue<PersonDataSources>(createPersonDataSourcesFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the inference property value. The inference property
     * @returns a inferenceData
     */
    public get inference() {
        return this._inference;
    };
    /**
     * Sets the inference property value. The inference property
     * @param value Value to set for the inference property.
     */
    public set inference(value: InferenceData | undefined) {
        this._inference = value;
    };
    /**
     * Gets the isSearchable property value. The isSearchable property
     * @returns a boolean
     */
    public get isSearchable() {
        return this._isSearchable;
    };
    /**
     * Sets the isSearchable property value. The isSearchable property
     * @param value Value to set for the isSearchable property.
     */
    public set isSearchable(value: boolean | undefined) {
        this._isSearchable = value;
    };
    /**
     * Gets the lastModifiedBy property value. The lastModifiedBy property
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The lastModifiedBy property
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. Provides the dateTimeOffset for when the entity was created.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Provides the dateTimeOffset for when the entity was created.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<AllowedAudiences>("allowedAudiences", this.allowedAudiences);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<InferenceData>("inference", this.inference);
        writer.writeBooleanValue("isSearchable", this.isSearchable);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeObjectValue<PersonDataSources>("source", this.source);
    };
    /**
     * Gets the source property value. The source property
     * @returns a personDataSources
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. The source property
     * @param value Value to set for the source property.
     */
    public set source(value: PersonDataSources | undefined) {
        this._source = value;
    };
}
