import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthorizationInfo implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The collection of unique identifiers that can be associated with a user and can be used to bind the Azure AD user to a certificate for authentication and authorization into non-Azure AD environments. The identifiers must be unique in the tenant. */
    private _certificateUserIds?: string[] | undefined;
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
     * Gets the certificateUserIds property value. The collection of unique identifiers that can be associated with a user and can be used to bind the Azure AD user to a certificate for authentication and authorization into non-Azure AD environments. The identifiers must be unique in the tenant.
     * @returns a string
     */
    public get certificateUserIds() {
        return this._certificateUserIds;
    };
    /**
     * Sets the certificateUserIds property value. The collection of unique identifiers that can be associated with a user and can be used to bind the Azure AD user to a certificate for authentication and authorization into non-Azure AD environments. The identifiers must be unique in the tenant.
     * @param value Value to set for the certificateUserIds property.
     */
    public set certificateUserIds(value: string[] | undefined) {
        this._certificateUserIds = value;
    };
    /**
     * Instantiates a new authorizationInfo and sets the default values.
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
            "certificateUserIds": n => { this.certificateUserIds = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("certificateUserIds", this.certificateUserIds);
        writer.writeAdditionalData(this.additionalData);
    };
}
