import {ApplicationServicePrincipal} from './index';
import {serializeApplication} from './serializeApplication';
import {serializeServicePrincipal} from './serializeServicePrincipal';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplicationServicePrincipal(writer: SerializationWriter, applicationServicePrincipal: ApplicationServicePrincipal | undefined = {}) : void {
            writer.writeObjectValueFromMethod("application", applicationServicePrincipal.application as any, serializeApplication);
            writer.writeStringValue("@odata.type", applicationServicePrincipal.odataType);
            writer.writeObjectValueFromMethod("servicePrincipal", applicationServicePrincipal.servicePrincipal as any, serializeServicePrincipal);
}
