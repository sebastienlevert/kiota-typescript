import {ItemFacet} from './index';
import {SkillProficiencyLevel} from './skillProficiencyLevel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SkillProficiency extends ItemFacet implements Parsable {
    /** Contains categories a user has associated with the skill (for example, personal, professional, hobby). */
    private _categories?: string[] | undefined;
    /** Contains experience scenario tags a user has associated with the interest. Allowed values in the collection are: askMeAbout, ableToMentor, wantsToLearn, wantsToImprove. */
    private _collaborationTags?: string[] | undefined;
    /** Contains a friendly name for the skill. */
    private _displayName?: string | undefined;
    /** The proficiency property */
    private _proficiency?: SkillProficiencyLevel | undefined;
    /** The thumbnailUrl property */
    private _thumbnailUrl?: string | undefined;
    /** Contains a link to an information source about the skill. */
    private _webUrl?: string | undefined;
    /**
     * Gets the categories property value. Contains categories a user has associated with the skill (for example, personal, professional, hobby).
     * @returns a string
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Sets the categories property value. Contains categories a user has associated with the skill (for example, personal, professional, hobby).
     * @param value Value to set for the categories property.
     */
    public set categories(value: string[] | undefined) {
        this._categories = value;
    };
    /**
     * Gets the collaborationTags property value. Contains experience scenario tags a user has associated with the interest. Allowed values in the collection are: askMeAbout, ableToMentor, wantsToLearn, wantsToImprove.
     * @returns a string
     */
    public get collaborationTags() {
        return this._collaborationTags;
    };
    /**
     * Sets the collaborationTags property value. Contains experience scenario tags a user has associated with the interest. Allowed values in the collection are: askMeAbout, ableToMentor, wantsToLearn, wantsToImprove.
     * @param value Value to set for the collaborationTags property.
     */
    public set collaborationTags(value: string[] | undefined) {
        this._collaborationTags = value;
    };
    /**
     * Instantiates a new skillProficiency and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Contains a friendly name for the skill.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Contains a friendly name for the skill.
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
            "categories": n => { this.categories = n.getCollectionOfPrimitiveValues<string>(); },
            "collaborationTags": n => { this.collaborationTags = n.getCollectionOfPrimitiveValues<string>(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "proficiency": n => { this.proficiency = n.getEnumValue<SkillProficiencyLevel>(SkillProficiencyLevel); },
            "thumbnailUrl": n => { this.thumbnailUrl = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the proficiency property value. The proficiency property
     * @returns a skillProficiencyLevel
     */
    public get proficiency() {
        return this._proficiency;
    };
    /**
     * Sets the proficiency property value. The proficiency property
     * @param value Value to set for the proficiency property.
     */
    public set proficiency(value: SkillProficiencyLevel | undefined) {
        this._proficiency = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("categories", this.categories);
        writer.writeCollectionOfPrimitiveValues<string>("collaborationTags", this.collaborationTags);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeEnumValue<SkillProficiencyLevel>("proficiency", this.proficiency);
        writer.writeStringValue("thumbnailUrl", this.thumbnailUrl);
        writer.writeStringValue("webUrl", this.webUrl);
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
     * Gets the webUrl property value. Contains a link to an information source about the skill.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Contains a link to an information source about the skill.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
