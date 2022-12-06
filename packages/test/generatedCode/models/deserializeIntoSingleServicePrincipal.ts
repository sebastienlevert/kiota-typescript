import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {SingleServicePrincipal} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSingleServicePrincipal(singleServicePrincipal: SingleServicePrincipal | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(singleServicePrincipal),
        "description": n => { singleServicePrincipal.description = n.getStringValue() as any ; },
        "servicePrincipalId": n => { singleServicePrincipal.servicePrincipalId = n.getStringValue() as any ; },
    }
}
