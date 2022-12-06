import {deserializeIntoApplication} from './deserializeIntoApplication';
import {deserializeIntoServicePrincipal} from './deserializeIntoServicePrincipal';
import {ApplicationServicePrincipal} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplicationServicePrincipal(applicationServicePrincipal: ApplicationServicePrincipal | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "application": n => { applicationServicePrincipal.application = n.getObject(deserializeIntoApplication) as any ; },
        "@odata.type": n => { applicationServicePrincipal.odataType = n.getStringValue() as any ; },
        "servicePrincipal": n => { applicationServicePrincipal.servicePrincipal = n.getObject(deserializeIntoServicePrincipal) as any ; },
    }
}
