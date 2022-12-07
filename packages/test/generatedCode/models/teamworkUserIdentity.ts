import {Identity} from './index';
import {TeamworkUserIdentityType} from './teamworkUserIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkUserIdentity extends Identity implements Parsable {
    /** The userIdentityType property */
    private _userIdentityType?: TeamworkUserIdentityType | undefined;
    /**
     * Instantiates a new TeamworkUserIdentity and sets the default values.
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
            "userIdentityType": n => { this.userIdentityType = n.getEnumValue<TeamworkUserIdentityType>(TeamworkUserIdentityType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<TeamworkUserIdentityType>("userIdentityType", this.userIdentityType);
    };
    /**
     * Gets the userIdentityType property value. The userIdentityType property
     * @returns a teamworkUserIdentityType
     */
    public get userIdentityType() {
        return this._userIdentityType;
    };
    /**
     * Sets the userIdentityType property value. The userIdentityType property
     * @param value Value to set for the userIdentityType property.
     */
    public set userIdentityType(value: TeamworkUserIdentityType | undefined) {
        this._userIdentityType = value;
    };
}
