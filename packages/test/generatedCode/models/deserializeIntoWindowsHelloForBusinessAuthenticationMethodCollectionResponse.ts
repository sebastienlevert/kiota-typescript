import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsHelloForBusinessAuthenticationMethod} from './deserializeIntoWindowsHelloForBusinessAuthenticationMethod';
import {WindowsHelloForBusinessAuthenticationMethodCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsHelloForBusinessAuthenticationMethodCollectionResponse(windowsHelloForBusinessAuthenticationMethodCollectionResponse: WindowsHelloForBusinessAuthenticationMethodCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsHelloForBusinessAuthenticationMethodCollectionResponse),
        "value": n => { windowsHelloForBusinessAuthenticationMethodCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsHelloForBusinessAuthenticationMethod) as any ; },
    }
}
