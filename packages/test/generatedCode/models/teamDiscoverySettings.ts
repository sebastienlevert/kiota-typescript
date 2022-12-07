import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamDiscoverySettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If set to true, the team is visible via search and suggestions from the Teams client. */
    private _showInTeamsSearchAndSuggestions?: boolean | undefined;
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
     * Instantiates a new teamDiscoverySettings and sets the default values.
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
            "showInTeamsSearchAndSuggestions": n => { this.showInTeamsSearchAndSuggestions = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("showInTeamsSearchAndSuggestions", this.showInTeamsSearchAndSuggestions);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the showInTeamsSearchAndSuggestions property value. If set to true, the team is visible via search and suggestions from the Teams client.
     * @returns a boolean
     */
    public get showInTeamsSearchAndSuggestions() {
        return this._showInTeamsSearchAndSuggestions;
    };
    /**
     * Sets the showInTeamsSearchAndSuggestions property value. If set to true, the team is visible via search and suggestions from the Teams client.
     * @param value Value to set for the showInTeamsSearchAndSuggestions property.
     */
    public set showInTeamsSearchAndSuggestions(value: boolean | undefined) {
        this._showInTeamsSearchAndSuggestions = value;
    };
}
