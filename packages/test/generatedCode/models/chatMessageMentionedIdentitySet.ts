import {createTeamworkConversationIdentityFromDiscriminatorValue} from './createTeamworkConversationIdentityFromDiscriminatorValue';
import {createTeamworkTagIdentityFromDiscriminatorValue} from './createTeamworkTagIdentityFromDiscriminatorValue';
import {IdentitySet, TeamworkConversationIdentity, TeamworkTagIdentity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageMentionedIdentitySet extends IdentitySet implements Parsable {
    /** The conversation property */
    private _conversation?: TeamworkConversationIdentity | undefined;
    /** The tag property */
    private _tag?: TeamworkTagIdentity | undefined;
    /**
     * Instantiates a new ChatMessageMentionedIdentitySet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the conversation property value. The conversation property
     * @returns a teamworkConversationIdentity
     */
    public get conversation() {
        return this._conversation;
    };
    /**
     * Sets the conversation property value. The conversation property
     * @param value Value to set for the conversation property.
     */
    public set conversation(value: TeamworkConversationIdentity | undefined) {
        this._conversation = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "conversation": n => { this.conversation = n.getObjectValue<TeamworkConversationIdentity>(createTeamworkConversationIdentityFromDiscriminatorValue); },
            "tag": n => { this.tag = n.getObjectValue<TeamworkTagIdentity>(createTeamworkTagIdentityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TeamworkConversationIdentity>("conversation", this.conversation);
        writer.writeObjectValue<TeamworkTagIdentity>("tag", this.tag);
    };
    /**
     * Gets the tag property value. The tag property
     * @returns a teamworkTagIdentity
     */
    public get tag() {
        return this._tag;
    };
    /**
     * Sets the tag property value. The tag property
     * @param value Value to set for the tag property.
     */
    public set tag(value: TeamworkTagIdentity | undefined) {
        this._tag = value;
    };
}
