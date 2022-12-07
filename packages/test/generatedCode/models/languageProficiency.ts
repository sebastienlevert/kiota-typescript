import {ItemFacet} from './index';
import {LanguageProficiencyLevel} from './languageProficiencyLevel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LanguageProficiency extends ItemFacet implements Parsable {
    /** Contains the long-form name for the language. */
    private _displayName?: string | undefined;
    /** The proficiency property */
    private _proficiency?: LanguageProficiencyLevel | undefined;
    /** The reading property */
    private _reading?: LanguageProficiencyLevel | undefined;
    /** The spoken property */
    private _spoken?: LanguageProficiencyLevel | undefined;
    /** Contains the four-character BCP47 name for the language (en-US, no-NB, en-AU). */
    private _tag?: string | undefined;
    /** The thumbnailUrl property */
    private _thumbnailUrl?: string | undefined;
    /** The written property */
    private _written?: LanguageProficiencyLevel | undefined;
    /**
     * Instantiates a new languageProficiency and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Contains the long-form name for the language.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Contains the long-form name for the language.
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
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "proficiency": n => { this.proficiency = n.getEnumValue<LanguageProficiencyLevel>(LanguageProficiencyLevel); },
            "reading": n => { this.reading = n.getEnumValue<LanguageProficiencyLevel>(LanguageProficiencyLevel); },
            "spoken": n => { this.spoken = n.getEnumValue<LanguageProficiencyLevel>(LanguageProficiencyLevel); },
            "tag": n => { this.tag = n.getStringValue(); },
            "thumbnailUrl": n => { this.thumbnailUrl = n.getStringValue(); },
            "written": n => { this.written = n.getEnumValue<LanguageProficiencyLevel>(LanguageProficiencyLevel); },
        };
    };
    /**
     * Gets the proficiency property value. The proficiency property
     * @returns a languageProficiencyLevel
     */
    public get proficiency() {
        return this._proficiency;
    };
    /**
     * Sets the proficiency property value. The proficiency property
     * @param value Value to set for the proficiency property.
     */
    public set proficiency(value: LanguageProficiencyLevel | undefined) {
        this._proficiency = value;
    };
    /**
     * Gets the reading property value. The reading property
     * @returns a languageProficiencyLevel
     */
    public get reading() {
        return this._reading;
    };
    /**
     * Sets the reading property value. The reading property
     * @param value Value to set for the reading property.
     */
    public set reading(value: LanguageProficiencyLevel | undefined) {
        this._reading = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<LanguageProficiencyLevel>("proficiency", this.proficiency);
        writer.writeEnumValue<LanguageProficiencyLevel>("reading", this.reading);
        writer.writeEnumValue<LanguageProficiencyLevel>("spoken", this.spoken);
        writer.writeStringValue("tag", this.tag);
        writer.writeStringValue("thumbnailUrl", this.thumbnailUrl);
        writer.writeEnumValue<LanguageProficiencyLevel>("written", this.written);
    };
    /**
     * Gets the spoken property value. The spoken property
     * @returns a languageProficiencyLevel
     */
    public get spoken() {
        return this._spoken;
    };
    /**
     * Sets the spoken property value. The spoken property
     * @param value Value to set for the spoken property.
     */
    public set spoken(value: LanguageProficiencyLevel | undefined) {
        this._spoken = value;
    };
    /**
     * Gets the tag property value. Contains the four-character BCP47 name for the language (en-US, no-NB, en-AU).
     * @returns a string
     */
    public get tag() {
        return this._tag;
    };
    /**
     * Sets the tag property value. Contains the four-character BCP47 name for the language (en-US, no-NB, en-AU).
     * @param value Value to set for the tag property.
     */
    public set tag(value: string | undefined) {
        this._tag = value;
    };
    /**
     * Gets the thumbnailUrl property value. The thumbnailUrl property
     * @returns a string
     */
    public get thumbnailUrl() {
        return this._thumbnailUrl;
    };
    /**
     * Sets the thumbnailUrl property value. The thumbnailUrl property
     * @param value Value to set for the thumbnailUrl property.
     */
    public set thumbnailUrl(value: string | undefined) {
        this._thumbnailUrl = value;
    };
    /**
     * Gets the written property value. The written property
     * @returns a languageProficiencyLevel
     */
    public get written() {
        return this._written;
    };
    /**
     * Sets the written property value. The written property
     * @param value Value to set for the written property.
     */
    public set written(value: LanguageProficiencyLevel | undefined) {
        this._written = value;
    };
}
