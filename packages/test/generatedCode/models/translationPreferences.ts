import {createTranslationLanguageOverrideFromDiscriminatorValue} from './createTranslationLanguageOverrideFromDiscriminatorValue';
import {TranslationLanguageOverride} from './index';
import {TranslationBehavior} from './translationBehavior';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TranslationPreferences implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Translation override behavior for languages, if any.Returned by default. */
    private _languageOverrides?: TranslationLanguageOverride[] | undefined;
    /** The translationBehavior property */
    private _translationBehavior?: TranslationBehavior | undefined;
    /** The list of languages the user does not need translated. This is computed from the authoringLanguages collection in regionalAndLanguageSettings, and the languageOverrides collection in translationPreferences. The list specifies neutral culture values that include the language code without any country or region association. For example, it would specify 'fr' for the neutral French culture, but not 'fr-FR' for the French culture in France. Returned by default. Read only. */
    private _untranslatedLanguages?: string[] | undefined;
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
     * Instantiates a new translationPreferences and sets the default values.
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
            "languageOverrides": n => { this.languageOverrides = n.getCollectionOfObjectValues<TranslationLanguageOverride>(createTranslationLanguageOverrideFromDiscriminatorValue); },
            "translationBehavior": n => { this.translationBehavior = n.getEnumValue<TranslationBehavior>(TranslationBehavior); },
            "untranslatedLanguages": n => { this.untranslatedLanguages = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the languageOverrides property value. Translation override behavior for languages, if any.Returned by default.
     * @returns a translationLanguageOverride
     */
    public get languageOverrides() {
        return this._languageOverrides;
    };
    /**
     * Sets the languageOverrides property value. Translation override behavior for languages, if any.Returned by default.
     * @param value Value to set for the languageOverrides property.
     */
    public set languageOverrides(value: TranslationLanguageOverride[] | undefined) {
        this._languageOverrides = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<TranslationLanguageOverride>("languageOverrides", this.languageOverrides);
        writer.writeEnumValue<TranslationBehavior>("translationBehavior", this.translationBehavior);
        writer.writeCollectionOfPrimitiveValues<string>("untranslatedLanguages", this.untranslatedLanguages);
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
    /**
     * Gets the untranslatedLanguages property value. The list of languages the user does not need translated. This is computed from the authoringLanguages collection in regionalAndLanguageSettings, and the languageOverrides collection in translationPreferences. The list specifies neutral culture values that include the language code without any country or region association. For example, it would specify 'fr' for the neutral French culture, but not 'fr-FR' for the French culture in France. Returned by default. Read only.
     * @returns a string
     */
    public get untranslatedLanguages() {
        return this._untranslatedLanguages;
    };
    /**
     * Sets the untranslatedLanguages property value. The list of languages the user does not need translated. This is computed from the authoringLanguages collection in regionalAndLanguageSettings, and the languageOverrides collection in translationPreferences. The list specifies neutral culture values that include the language code without any country or region association. For example, it would specify 'fr' for the neutral French culture, but not 'fr-FR' for the French culture in France. Returned by default. Read only.
     * @param value Value to set for the untranslatedLanguages property.
     */
    public set untranslatedLanguages(value: string[] | undefined) {
        this._untranslatedLanguages = value;
    };
}
