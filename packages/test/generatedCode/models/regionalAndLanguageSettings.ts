import {createLocaleInfoFromDiscriminatorValue} from './createLocaleInfoFromDiscriminatorValue';
import {createRegionalFormatOverridesFromDiscriminatorValue} from './createRegionalFormatOverridesFromDiscriminatorValue';
import {createTranslationPreferencesFromDiscriminatorValue} from './createTranslationPreferencesFromDiscriminatorValue';
import {Entity, LocaleInfo, RegionalFormatOverrides, TranslationPreferences} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RegionalAndLanguageSettings extends Entity implements Parsable {
    /** Prioritized list of languages the user reads and authors in.Returned by default. Not nullable. */
    private _authoringLanguages?: LocaleInfo[] | undefined;
    /** The defaultDisplayLanguage property */
    private _defaultDisplayLanguage?: LocaleInfo | undefined;
    /** The defaultRegionalFormat property */
    private _defaultRegionalFormat?: LocaleInfo | undefined;
    /** The defaultSpeechInputLanguage property */
    private _defaultSpeechInputLanguage?: LocaleInfo | undefined;
    /** The defaultTranslationLanguage property */
    private _defaultTranslationLanguage?: LocaleInfo | undefined;
    /** The regionalFormatOverrides property */
    private _regionalFormatOverrides?: RegionalFormatOverrides | undefined;
    /** The translationPreferences property */
    private _translationPreferences?: TranslationPreferences | undefined;
    /**
     * Gets the authoringLanguages property value. Prioritized list of languages the user reads and authors in.Returned by default. Not nullable.
     * @returns a localeInfo
     */
    public get authoringLanguages() {
        return this._authoringLanguages;
    };
    /**
     * Sets the authoringLanguages property value. Prioritized list of languages the user reads and authors in.Returned by default. Not nullable.
     * @param value Value to set for the authoringLanguages property.
     */
    public set authoringLanguages(value: LocaleInfo[] | undefined) {
        this._authoringLanguages = value;
    };
    /**
     * Instantiates a new regionalAndLanguageSettings and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defaultDisplayLanguage property value. The defaultDisplayLanguage property
     * @returns a localeInfo
     */
    public get defaultDisplayLanguage() {
        return this._defaultDisplayLanguage;
    };
    /**
     * Sets the defaultDisplayLanguage property value. The defaultDisplayLanguage property
     * @param value Value to set for the defaultDisplayLanguage property.
     */
    public set defaultDisplayLanguage(value: LocaleInfo | undefined) {
        this._defaultDisplayLanguage = value;
    };
    /**
     * Gets the defaultRegionalFormat property value. The defaultRegionalFormat property
     * @returns a localeInfo
     */
    public get defaultRegionalFormat() {
        return this._defaultRegionalFormat;
    };
    /**
     * Sets the defaultRegionalFormat property value. The defaultRegionalFormat property
     * @param value Value to set for the defaultRegionalFormat property.
     */
    public set defaultRegionalFormat(value: LocaleInfo | undefined) {
        this._defaultRegionalFormat = value;
    };
    /**
     * Gets the defaultSpeechInputLanguage property value. The defaultSpeechInputLanguage property
     * @returns a localeInfo
     */
    public get defaultSpeechInputLanguage() {
        return this._defaultSpeechInputLanguage;
    };
    /**
     * Sets the defaultSpeechInputLanguage property value. The defaultSpeechInputLanguage property
     * @param value Value to set for the defaultSpeechInputLanguage property.
     */
    public set defaultSpeechInputLanguage(value: LocaleInfo | undefined) {
        this._defaultSpeechInputLanguage = value;
    };
    /**
     * Gets the defaultTranslationLanguage property value. The defaultTranslationLanguage property
     * @returns a localeInfo
     */
    public get defaultTranslationLanguage() {
        return this._defaultTranslationLanguage;
    };
    /**
     * Sets the defaultTranslationLanguage property value. The defaultTranslationLanguage property
     * @param value Value to set for the defaultTranslationLanguage property.
     */
    public set defaultTranslationLanguage(value: LocaleInfo | undefined) {
        this._defaultTranslationLanguage = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "authoringLanguages": n => { this.authoringLanguages = n.getCollectionOfObjectValues<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
            "defaultDisplayLanguage": n => { this.defaultDisplayLanguage = n.getObjectValue<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
            "defaultRegionalFormat": n => { this.defaultRegionalFormat = n.getObjectValue<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
            "defaultSpeechInputLanguage": n => { this.defaultSpeechInputLanguage = n.getObjectValue<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
            "defaultTranslationLanguage": n => { this.defaultTranslationLanguage = n.getObjectValue<LocaleInfo>(createLocaleInfoFromDiscriminatorValue); },
            "regionalFormatOverrides": n => { this.regionalFormatOverrides = n.getObjectValue<RegionalFormatOverrides>(createRegionalFormatOverridesFromDiscriminatorValue); },
            "translationPreferences": n => { this.translationPreferences = n.getObjectValue<TranslationPreferences>(createTranslationPreferencesFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the regionalFormatOverrides property value. The regionalFormatOverrides property
     * @returns a regionalFormatOverrides
     */
    public get regionalFormatOverrides() {
        return this._regionalFormatOverrides;
    };
    /**
     * Sets the regionalFormatOverrides property value. The regionalFormatOverrides property
     * @param value Value to set for the regionalFormatOverrides property.
     */
    public set regionalFormatOverrides(value: RegionalFormatOverrides | undefined) {
        this._regionalFormatOverrides = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<LocaleInfo>("authoringLanguages", this.authoringLanguages);
        writer.writeObjectValue<LocaleInfo>("defaultDisplayLanguage", this.defaultDisplayLanguage);
        writer.writeObjectValue<LocaleInfo>("defaultRegionalFormat", this.defaultRegionalFormat);
        writer.writeObjectValue<LocaleInfo>("defaultSpeechInputLanguage", this.defaultSpeechInputLanguage);
        writer.writeObjectValue<LocaleInfo>("defaultTranslationLanguage", this.defaultTranslationLanguage);
        writer.writeObjectValue<RegionalFormatOverrides>("regionalFormatOverrides", this.regionalFormatOverrides);
        writer.writeObjectValue<TranslationPreferences>("translationPreferences", this.translationPreferences);
    };
    /**
     * Gets the translationPreferences property value. The translationPreferences property
     * @returns a translationPreferences
     */
    public get translationPreferences() {
        return this._translationPreferences;
    };
    /**
     * Sets the translationPreferences property value. The translationPreferences property
     * @param value Value to set for the translationPreferences property.
     */
    public set translationPreferences(value: TranslationPreferences | undefined) {
        this._translationPreferences = value;
    };
}
