import {TranslationBehavior} from './translationBehavior';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TranslationLanguageOverride implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The language to apply the override.Returned by default. Not nullable. */
    private _languageTag?: string | undefined;
    /** The translationBehavior property */
    private _translationBehavior?: TranslationBehavior | undefined;
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
     * Instantiates a new translationLanguageOverride and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "languageTag": n => { this.languageTag = n.getStringValue(); },
            "translationBehavior": n => { this.translationBehavior = n.getEnumValue<TranslationBehavior>(TranslationBehavior); },
        };
    };
    /**
     * Gets the languageTag property value. The language to apply the override.Returned by default. Not nullable.
     * @returns a string
     */
    public get languageTag() {
        return this._languageTag;
    };
    /**
     * Sets the languageTag property value. The language to apply the override.Returned by default. Not nullable.
     * @param value Value to set for the languageTag property.
     */
    public set languageTag(value: string | undefined) {
        this._languageTag = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("languageTag", this.languageTag);
        writer.writeEnumValue<TranslationBehavior>("translationBehavior", this.translationBehavior);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the translationBehavior property value. The translationBehavior property
     * @returns a translationBehavior
     */
    public get translationBehavior() {
        return this._translationBehavior;
    };
    /**
     * Sets the translationBehavior property value. The translationBehavior property
     * @param value Value to set for the translationBehavior property.
     */
    public set translationBehavior(value: TranslationBehavior | undefined) {
        this._translationBehavior = value;
    };
}
