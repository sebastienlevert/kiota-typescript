import {Application, ServicePrincipal} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ApplicationServicePrincipal extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The application property */
    application?: Application;
    /** The OdataType property */
    odataType?: string;
    /** The servicePrincipal property */
    servicePrincipal?: ServicePrincipal;
}
