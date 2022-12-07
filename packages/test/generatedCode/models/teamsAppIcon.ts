import {createTeamworkHostedContentFromDiscriminatorValue} from './createTeamworkHostedContentFromDiscriminatorValue';
import {Entity, TeamworkHostedContent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAppIcon extends Entity implements Parsable {
    /** The hostedContent property */
    private _hostedContent?: TeamworkHostedContent | undefined;
    /** The web URL that can be used for downloading the image. */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new teamsAppIcon and sets the default values.
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
            "hostedContent": n => { this.hostedContent = n.getObjectValue<TeamworkHostedContent>(createTeamworkHostedContentFromDiscriminatorValue); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the hostedContent property value. The hostedContent property
     * @returns a teamworkHostedContent
     */
    public get hostedContent() {
        return this._hostedContent;
    };
    /**
     * Sets the hostedContent property value. The hostedContent property
     * @param value Value to set for the hostedContent property.
     */
    public set hostedContent(value: TeamworkHostedContent | undefined) {
        this._hostedContent = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TeamworkHostedContent>("hostedContent", this.hostedContent);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the webUrl property value. The web URL that can be used for downloading the image.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. The web URL that can be used for downloading the image.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
