import {WritebackConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupWritebackConfiguration extends WritebackConfiguration implements Parsable {
    /** Indicates the target on-premise group type the cloud object will be written back as. Nullable. The possible values are: universalDistributionGroup, universalSecurityGroup, universalMailEnabledSecurityGroup.If the cloud group is a unified (Microsoft 365) group, this property can be one of the following: universalDistributionGroup, universalSecurityGroup, universalMailEnabledSecurityGroup. Azure AD security groups can be written back as universalSecurityGroup. If isEnabled or the NewUnifiedGroupWritebackDefault group setting is true but this property is not explicitly configured: Microsoft 365 groups will be written back as universalDistributionGroup by defaultSecurity groups will be written back as universalSecurityGroup by default */
    private _onPremisesGroupType?: string | undefined;
    /**
     * Instantiates a new GroupWritebackConfiguration and sets the default values.
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
            "onPremisesGroupType": n => { this.onPremisesGroupType = n.getStringValue(); },
        };
    };
    /**
     * Gets the onPremisesGroupType property value. Indicates the target on-premise group type the cloud object will be written back as. Nullable. The possible values are: universalDistributionGroup, universalSecurityGroup, universalMailEnabledSecurityGroup.If the cloud group is a unified (Microsoft 365) group, this property can be one of the following: universalDistributionGroup, universalSecurityGroup, universalMailEnabledSecurityGroup. Azure AD security groups can be written back as universalSecurityGroup. If isEnabled or the NewUnifiedGroupWritebackDefault group setting is true but this property is not explicitly configured: Microsoft 365 groups will be written back as universalDistributionGroup by defaultSecurity groups will be written back as universalSecurityGroup by default
     * @returns a string
     */
    public get onPremisesGroupType() {
        return this._onPremisesGroupType;
    };
    /**
     * Sets the onPremisesGroupType property value. Indicates the target on-premise group type the cloud object will be written back as. Nullable. The possible values are: universalDistributionGroup, universalSecurityGroup, universalMailEnabledSecurityGroup.If the cloud group is a unified (Microsoft 365) group, this property can be one of the following: universalDistributionGroup, universalSecurityGroup, universalMailEnabledSecurityGroup. Azure AD security groups can be written back as universalSecurityGroup. If isEnabled or the NewUnifiedGroupWritebackDefault group setting is true but this property is not explicitly configured: Microsoft 365 groups will be written back as universalDistributionGroup by defaultSecurity groups will be written back as universalSecurityGroup by default
     * @param value Value to set for the onPremisesGroupType property.
     */
    public set onPremisesGroupType(value: string | undefined) {
        this._onPremisesGroupType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("onPremisesGroupType", this.onPremisesGroupType);
    };
}
