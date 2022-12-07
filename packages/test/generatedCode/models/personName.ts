import {createPersonNamePronounciationFromDiscriminatorValue} from './createPersonNamePronounciationFromDiscriminatorValue';
import {ItemFacet, PersonNamePronounciation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PersonName extends ItemFacet implements Parsable {
    /** Provides an ordered rendering of firstName and lastName depending on the locale of the user or their device. */
    private _displayName?: string | undefined;
    /** First name of the user. */
    private _first?: string | undefined;
    /** Initials of the user. */
    private _initials?: string | undefined;
    /** Contains the name for the language (en-US, no-NB, en-AU) following IETF BCP47 format. */
    private _languageTag?: string | undefined;
    /** Last name of the user. */
    private _last?: string | undefined;
    /** Maiden name of the user. */
    private _maiden?: string | undefined;
    /** Middle name of the user. */
    private _middle?: string | undefined;
    /** Nickname of the user. */
    private _nickname?: string | undefined;
    /** The pronunciation property */
    private _pronunciation?: PersonNamePronounciation | undefined;
    /** Designators used after the users name (eg: PhD.) */
    private _suffix?: string | undefined;
    /** Honorifics used to prefix a users name (eg: Dr, Sir, Madam, Mrs.) */
    private _title?: string | undefined;
    /**
     * Instantiates a new personName and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Provides an ordered rendering of firstName and lastName depending on the locale of the user or their device.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Provides an ordered rendering of firstName and lastName depending on the locale of the user or their device.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the first property value. First name of the user.
     * @returns a string
     */
    public get first() {
        return this._first;
    };
    /**
     * Sets the first property value. First name of the user.
     * @param value Value to set for the first property.
     */
    public set first(value: string | undefined) {
        this._first = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "first": n => { this.first = n.getStringValue(); },
            "initials": n => { this.initials = n.getStringValue(); },
            "languageTag": n => { this.languageTag = n.getStringValue(); },
            "last": n => { this.last = n.getStringValue(); },
            "maiden": n => { this.maiden = n.getStringValue(); },
            "middle": n => { this.middle = n.getStringValue(); },
            "nickname": n => { this.nickname = n.getStringValue(); },
            "pronunciation": n => { this.pronunciation = n.getObjectValue<PersonNamePronounciation>(createPersonNamePronounciationFromDiscriminatorValue); },
            "suffix": n => { this.suffix = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
        };
    };
    /**
     * Gets the initials property value. Initials of the user.
     * @returns a string
     */
    public get initials() {
        return this._initials;
    };
    /**
     * Sets the initials property value. Initials of the user.
     * @param value Value to set for the initials property.
     */
    public set initials(value: string | undefined) {
        this._initials = value;
    };
    /**
     * Gets the languageTag property value. Contains the name for the language (en-US, no-NB, en-AU) following IETF BCP47 format.
     * @returns a string
     */
    public get languageTag() {
        return this._languageTag;
    };
    /**
     * Sets the languageTag property value. Contains the name for the language (en-US, no-NB, en-AU) following IETF BCP47 format.
     * @param value Value to set for the languageTag property.
     */
    public set languageTag(value: string | undefined) {
        this._languageTag = value;
    };
    /**
     * Gets the last property value. Last name of the user.
     * @returns a string
     */
    public get last() {
        return this._last;
    };
    /**
     * Sets the last property value. Last name of the user.
     * @param value Value to set for the last property.
     */
    public set last(value: string | undefined) {
        this._last = value;
    };
    /**
     * Gets the maiden property value. Maiden name of the user.
     * @returns a string
     */
    public get maiden() {
        return this._maiden;
    };
    /**
     * Sets the maiden property value. Maiden name of the user.
     * @param value Value to set for the maiden property.
     */
    public set maiden(value: string | undefined) {
        this._maiden = value;
    };
    /**
     * Gets the middle property value. Middle name of the user.
     * @returns a string
     */
    public get middle() {
        return this._middle;
    };
    /**
     * Sets the middle property value. Middle name of the user.
     * @param value Value to set for the middle property.
     */
    public set middle(value: string | undefined) {
        this._middle = value;
    };
    /**
     * Gets the nickname property value. Nickname of the user.
     * @returns a string
     */
    public get nickname() {
        return this._nickname;
    };
    /**
     * Sets the nickname property value. Nickname of the user.
     * @param value Value to set for the nickname property.
     */
    public set nickname(value: string | undefined) {
        this._nickname = value;
    };
    /**
     * Gets the pronunciation property value. The pronunciation property
     * @returns a personNamePronounciation
     */
    public get pronunciation() {
        return this._pronunciation;
    };
    /**
     * Sets the pronunciation property value. The pronunciation property
     * @param value Value to set for the pronunciation property.
     */
    public set pronunciation(value: PersonNamePronounciation | undefined) {
        this._pronunciation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("first", this.first);
        writer.writeStringValue("initials", this.initials);
        writer.writeStringValue("languageTag", this.languageTag);
        writer.writeStringValue("last", this.last);
        writer.writeStringValue("maiden", this.maiden);
        writer.writeStringValue("middle", this.middle);
        writer.writeStringValue("nickname", this.nickname);
        writer.writeObjectValue<PersonNamePronounciation>("pronunciation", this.pronunciation);
        writer.writeStringValue("suffix", this.suffix);
        writer.writeStringValue("title", this.title);
    };
    /**
     * Gets the suffix property value. Designators used after the users name (eg: PhD.)
     * @returns a string
     */
    public get suffix() {
        return this._suffix;
    };
    /**
     * Sets the suffix property value. Designators used after the users name (eg: PhD.)
     * @param value Value to set for the suffix property.
     */
    public set suffix(value: string | undefined) {
        this._suffix = value;
    };
    /**
     * Gets the title property value. Honorifics used to prefix a users name (eg: Dr, Sir, Madam, Mrs.)
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. Honorifics used to prefix a users name (eg: Dr, Sir, Madam, Mrs.)
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
}
