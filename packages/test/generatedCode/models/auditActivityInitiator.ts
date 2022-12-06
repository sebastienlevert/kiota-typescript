import {AppIdentity, UserIdentity} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AuditActivityInitiator extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** If the resource initiating the activity is an app, this property indicates all the app related information like appId, Name, servicePrincipalId, Name. */
    app?: AppIdentity;
    /** The OdataType property */
    odataType?: string;
    /** If the resource initiating the activity is a user, this property Indicates all the user related information like userId, Name, UserPrinicpalName. */
    user?: UserIdentity;
}
