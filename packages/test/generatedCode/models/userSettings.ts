import {createContactMergeSuggestionsFromDiscriminatorValue} from './createContactMergeSuggestionsFromDiscriminatorValue';
import {createRegionalAndLanguageSettingsFromDiscriminatorValue} from './createRegionalAndLanguageSettingsFromDiscriminatorValue';
import {createShiftPreferencesFromDiscriminatorValue} from './createShiftPreferencesFromDiscriminatorValue';
import {createUserInsightsSettingsFromDiscriminatorValue} from './createUserInsightsSettingsFromDiscriminatorValue';
import {ContactMergeSuggestions, Entity, RegionalAndLanguageSettings, ShiftPreferences, UserInsightsSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserSettings extends Entity implements Parsable {
    /** The contactMergeSuggestions property */
    private _contactMergeSuggestions?: ContactMergeSuggestions | undefined;
    /** Reflects the Office Delve organization level setting. When set to true, the organization doesn't have access to Office Delve. This setting is read-only and can only be changed by administrators in the SharePoint admin center. */
    private _contributionToContentDiscoveryAsOrganizationDisabled?: boolean | undefined;
    /** When set to true, documents in the user's Office Delve are disabled. Users can control this setting in Office Delve. */
    private _contributionToContentDiscoveryDisabled?: boolean | undefined;
    /** The itemInsights property */
    private _itemInsights?: UserInsightsSettings | undefined;
    /** The regionalAndLanguageSettings property */
    private _regionalAndLanguageSettings?: RegionalAndLanguageSettings | undefined;
    /** The shiftPreferences property */
    private _shiftPreferences?: ShiftPreferences | undefined;
    /**
     * Instantiates a new userSettings and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contactMergeSuggestions property value. The contactMergeSuggestions property
     * @returns a contactMergeSuggestions
     */
    public get contactMergeSuggestions() {
        return this._contactMergeSuggestions;
    };
    /**
     * Sets the contactMergeSuggestions property value. The contactMergeSuggestions property
     * @param value Value to set for the contactMergeSuggestions property.
     */
    public set contactMergeSuggestions(value: ContactMergeSuggestions | undefined) {
        this._contactMergeSuggestions = value;
    };
    /**
     * Gets the contributionToContentDiscoveryAsOrganizationDisabled property value. Reflects the Office Delve organization level setting. When set to true, the organization doesn't have access to Office Delve. This setting is read-only and can only be changed by administrators in the SharePoint admin center.
     * @returns a boolean
     */
    public get contributionToContentDiscoveryAsOrganizationDisabled() {
        return this._contributionToContentDiscoveryAsOrganizationDisabled;
    };
    /**
     * Sets the contributionToContentDiscoveryAsOrganizationDisabled property value. Reflects the Office Delve organization level setting. When set to true, the organization doesn't have access to Office Delve. This setting is read-only and can only be changed by administrators in the SharePoint admin center.
     * @param value Value to set for the contributionToContentDiscoveryAsOrganizationDisabled property.
     */
    public set contributionToContentDiscoveryAsOrganizationDisabled(value: boolean | undefined) {
        this._contributionToContentDiscoveryAsOrganizationDisabled = value;
    };
    /**
     * Gets the contributionToContentDiscoveryDisabled property value. When set to true, documents in the user's Office Delve are disabled. Users can control this setting in Office Delve.
     * @returns a boolean
     */
    public get contributionToContentDiscoveryDisabled() {
        return this._contributionToContentDiscoveryDisabled;
    };
    /**
     * Sets the contributionToContentDiscoveryDisabled property value. When set to true, documents in the user's Office Delve are disabled. Users can control this setting in Office Delve.
     * @param value Value to set for the contributionToContentDiscoveryDisabled property.
     */
    public set contributionToContentDiscoveryDisabled(value: boolean | undefined) {
        this._contributionToContentDiscoveryDisabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "contactMergeSuggestions": n => { this.contactMergeSuggestions = n.getObjectValue<ContactMergeSuggestions>(createContactMergeSuggestionsFromDiscriminatorValue); },
            "contributionToContentDiscoveryAsOrganizationDisabled": n => { this.contributionToContentDiscoveryAsOrganizationDisabled = n.getBooleanValue(); },
            "contributionToContentDiscoveryDisabled": n => { this.contributionToContentDiscoveryDisabled = n.getBooleanValue(); },
            "itemInsights": n => { this.itemInsights = n.getObjectValue<UserInsightsSettings>(createUserInsightsSettingsFromDiscriminatorValue); },
            "regionalAndLanguageSettings": n => { this.regionalAndLanguageSettings = n.getObjectValue<RegionalAndLanguageSettings>(createRegionalAndLanguageSettingsFromDiscriminatorValue); },
            "shiftPreferences": n => { this.shiftPreferences = n.getObjectValue<ShiftPreferences>(createShiftPreferencesFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the itemInsights property value. The itemInsights property
     * @returns a userInsightsSettings
     */
    public get itemInsights() {
        return this._itemInsights;
    };
    /**
     * Sets the itemInsights property value. The itemInsights property
     * @param value Value to set for the itemInsights property.
     */
    public set itemInsights(value: UserInsightsSettings | undefined) {
        this._itemInsights = value;
    };
    /**
     * Gets the regionalAndLanguageSettings property value. The regionalAndLanguageSettings property
     * @returns a regionalAndLanguageSettings
     */
    public get regionalAndLanguageSettings() {
        return this._regionalAndLanguageSettings;
    };
    /**
     * Sets the regionalAndLanguageSettings property value. The regionalAndLanguageSettings property
     * @param value Value to set for the regionalAndLanguageSettings property.
     */
    public set regionalAndLanguageSettings(value: RegionalAndLanguageSettings | undefined) {
        this._regionalAndLanguageSettings = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<ContactMergeSuggestions>("contactMergeSuggestions", this.contactMergeSuggestions);
        writer.writeBooleanValue("contributionToContentDiscoveryAsOrganizationDisabled", this.contributionToContentDiscoveryAsOrganizationDisabled);
        writer.writeBooleanValue("contributionToContentDiscoveryDisabled", this.contributionToContentDiscoveryDisabled);
        writer.writeObjectValue<UserInsightsSettings>("itemInsights", this.itemInsights);
        writer.writeObjectValue<RegionalAndLanguageSettings>("regionalAndLanguageSettings", this.regionalAndLanguageSettings);
        writer.writeObjectValue<ShiftPreferences>("shiftPreferences", this.shiftPreferences);
    };
    /**
     * Gets the shiftPreferences property value. The shiftPreferences property
     * @returns a shiftPreferences
     */
    public get shiftPreferences() {
        return this._shiftPreferences;
    };
    /**
     * Sets the shiftPreferences property value. The shiftPreferences property
     * @param value Value to set for the shiftPreferences property.
     */
    public set shiftPreferences(value: ShiftPreferences | undefined) {
        this._shiftPreferences = value;
    };
}
