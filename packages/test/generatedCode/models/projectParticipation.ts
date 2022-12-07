import {createCompanyDetailFromDiscriminatorValue} from './createCompanyDetailFromDiscriminatorValue';
import {createPositionDetailFromDiscriminatorValue} from './createPositionDetailFromDiscriminatorValue';
import {createRelatedPersonFromDiscriminatorValue} from './createRelatedPersonFromDiscriminatorValue';
import {CompanyDetail, ItemFacet, PositionDetail, RelatedPerson} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProjectParticipation extends ItemFacet implements Parsable {
    /** Contains categories a user has associated with the project (for example, digital transformation, oil rig). */
    private _categories?: string[] | undefined;
    /** The client property */
    private _client?: CompanyDetail | undefined;
    /** Contains experience scenario tags a user has associated with the interest. Allowed values in the collection are: askMeAbout, ableToMentor, wantsToLearn, wantsToImprove. */
    private _collaborationTags?: string[] | undefined;
    /** Lists people that also worked on the project. */
    private _colleagues?: RelatedPerson[] | undefined;
    /** The detail property */
    private _detail?: PositionDetail | undefined;
    /** Contains a friendly name for the project. */
    private _displayName?: string | undefined;
    /** The Person or people who sponsored the project. */
    private _sponsors?: RelatedPerson[] | undefined;
    /** The thumbnailUrl property */
    private _thumbnailUrl?: string | undefined;
    /**
     * Gets the categories property value. Contains categories a user has associated with the project (for example, digital transformation, oil rig).
     * @returns a string
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Sets the categories property value. Contains categories a user has associated with the project (for example, digital transformation, oil rig).
     * @param value Value to set for the categories property.
     */
    public set categories(value: string[] | undefined) {
        this._categories = value;
    };
    /**
     * Gets the client property value. The client property
     * @returns a companyDetail
     */
    public get client() {
        return this._client;
    };
    /**
     * Sets the client property value. The client property
     * @param value Value to set for the client property.
     */
    public set client(value: CompanyDetail | undefined) {
        this._client = value;
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
     * Gets the colleagues property value. Lists people that also worked on the project.
     * @returns a relatedPerson
     */
    public get colleagues() {
        return this._colleagues;
    };
    /**
     * Sets the colleagues property value. Lists people that also worked on the project.
     * @param value Value to set for the colleagues property.
     */
    public set colleagues(value: RelatedPerson[] | undefined) {
        this._colleagues = value;
    };
    /**
     * Instantiates a new projectParticipation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the detail property value. The detail property
     * @returns a positionDetail
     */
    public get detail() {
        return this._detail;
    };
    /**
     * Sets the detail property value. The detail property
     * @param value Value to set for the detail property.
     */
    public set detail(value: PositionDetail | undefined) {
        this._detail = value;
    };
    /**
     * Gets the displayName property value. Contains a friendly name for the project.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Contains a friendly name for the project.
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
            "client": n => { this.client = n.getObjectValue<CompanyDetail>(createCompanyDetailFromDiscriminatorValue); },
            "collaborationTags": n => { this.collaborationTags = n.getCollectionOfPrimitiveValues<string>(); },
            "colleagues": n => { this.colleagues = n.getCollectionOfObjectValues<RelatedPerson>(createRelatedPersonFromDiscriminatorValue); },
            "detail": n => { this.detail = n.getObjectValue<PositionDetail>(createPositionDetailFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "sponsors": n => { this.sponsors = n.getCollectionOfObjectValues<RelatedPerson>(createRelatedPersonFromDiscriminatorValue); },
            "thumbnailUrl": n => { this.thumbnailUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfPrimitiveValues<string>("categories", this.categories);
        writer.writeObjectValue<CompanyDetail>("client", this.client);
        writer.writeCollectionOfPrimitiveValues<string>("collaborationTags", this.collaborationTags);
        writer.writeCollectionOfObjectValues<RelatedPerson>("colleagues", this.colleagues);
        writer.writeObjectValue<PositionDetail>("detail", this.detail);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<RelatedPerson>("sponsors", this.sponsors);
        writer.writeStringValue("thumbnailUrl", this.thumbnailUrl);
    };
    /**
     * Gets the sponsors property value. The Person or people who sponsored the project.
     * @returns a relatedPerson
     */
    public get sponsors() {
        return this._sponsors;
    };
    /**
     * Sets the sponsors property value. The Person or people who sponsored the project.
     * @param value Value to set for the sponsors property.
     */
    public set sponsors(value: RelatedPerson[] | undefined) {
        this._sponsors = value;
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
}
