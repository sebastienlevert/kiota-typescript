import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppIdentity extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Refers to the Unique GUID representing Application Id in the Azure Active Directory. */
    appId?: string;
    /** Refers to the Application Name displayed in the Azure Portal. */
    displayName?: string;
    /** The OdataType property */
    odataType?: string;
    /** Refers to the Unique GUID indicating Service Principal Id in Azure Active Directory for the corresponding App. */
    servicePrincipalId?: string;
    /** Refers to the Service Principal Name is the Application name in the tenant. */
    servicePrincipalName?: string;
}
