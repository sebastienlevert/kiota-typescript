import {WindowsHelloForBusinessAuthenticationMethodCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindowsHelloForBusinessAuthenticationMethod} from './serializeWindowsHelloForBusinessAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsHelloForBusinessAuthenticationMethodCollectionResponse(writer: SerializationWriter, windowsHelloForBusinessAuthenticationMethodCollectionResponse: WindowsHelloForBusinessAuthenticationMethodCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windowsHelloForBusinessAuthenticationMethodCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windowsHelloForBusinessAuthenticationMethodCollectionResponse.value as any, serializeWindowsHelloForBusinessAuthenticationMethod);
}
