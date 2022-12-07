import {PlannerTaskCreation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerTeamsPublicationInfo extends PlannerTaskCreation implements Parsable {
    /** The date and time when this task was last modified by the publication process. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The identifier of the publication. Read-only. */
    private _publicationId?: string | undefined;
    /** The identifier of the plannerPlan this task was originally placed in. Read-only. */
    private _publishedToPlanId?: string | undefined;
    /** The identifier of the team that initiated the publication process. Read-only. */
    private _publishingTeamId?: string | undefined;
    /** The display name of the team that initiated the publication process. This display name is for reference only, and might not represent the most up-to-date name of the team. Read-only. */
    private _publishingTeamName?: string | undefined;
    /**
     * Instantiates a new plannerTeamsPublicationInfo and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "publicationId": n => { this.publicationId = n.getStringValue(); },
            "publishedToPlanId": n => { this.publishedToPlanId = n.getStringValue(); },
            "publishingTeamId": n => { this.publishingTeamId = n.getStringValue(); },
            "publishingTeamName": n => { this.publishingTeamName = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. The date and time when this task was last modified by the publication process. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The date and time when this task was last modified by the publication process. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the publicationId property value. The identifier of the publication. Read-only.
     * @returns a string
     */
    public get publicationId() {
        return this._publicationId;
    };
    /**
     * Sets the publicationId property value. The identifier of the publication. Read-only.
     * @param value Value to set for the publicationId property.
     */
    public set publicationId(value: string | undefined) {
        this._publicationId = value;
    };
    /**
     * Gets the publishedToPlanId property value. The identifier of the plannerPlan this task was originally placed in. Read-only.
     * @returns a string
     */
    public get publishedToPlanId() {
        return this._publishedToPlanId;
    };
    /**
     * Sets the publishedToPlanId property value. The identifier of the plannerPlan this task was originally placed in. Read-only.
     * @param value Value to set for the publishedToPlanId property.
     */
    public set publishedToPlanId(value: string | undefined) {
        this._publishedToPlanId = value;
    };
    /**
     * Gets the publishingTeamId property value. The identifier of the team that initiated the publication process. Read-only.
     * @returns a string
     */
    public get publishingTeamId() {
        return this._publishingTeamId;
    };
    /**
     * Sets the publishingTeamId property value. The identifier of the team that initiated the publication process. Read-only.
     * @param value Value to set for the publishingTeamId property.
     */
    public set publishingTeamId(value: string | undefined) {
        this._publishingTeamId = value;
    };
    /**
     * Gets the publishingTeamName property value. The display name of the team that initiated the publication process. This display name is for reference only, and might not represent the most up-to-date name of the team. Read-only.
     * @returns a string
     */
    public get publishingTeamName() {
        return this._publishingTeamName;
    };
    /**
     * Sets the publishingTeamName property value. The display name of the team that initiated the publication process. This display name is for reference only, and might not represent the most up-to-date name of the team. Read-only.
     * @param value Value to set for the publishingTeamName property.
     */
    public set publishingTeamName(value: string | undefined) {
        this._publishingTeamName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("publicationId", this.publicationId);
        writer.writeStringValue("publishedToPlanId", this.publishedToPlanId);
        writer.writeStringValue("publishingTeamId", this.publishingTeamId);
        writer.writeStringValue("publishingTeamName", this.publishingTeamName);
    };
}
