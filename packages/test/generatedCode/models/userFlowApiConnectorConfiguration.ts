import {IdentityApiConnector} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserFlowApiConnectorConfiguration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** The postAttributeCollection property */
    postAttributeCollection?: IdentityApiConnector;
    /** The postFederationSignup property */
    postFederationSignup?: IdentityApiConnector;
}
