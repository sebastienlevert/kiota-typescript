import {AndroidManagedAppRegistrationCollectionResponse} from './index';
import {serializeAndroidManagedAppRegistration} from './serializeAndroidManagedAppRegistration';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAndroidManagedAppRegistrationCollectionResponse(writer: SerializationWriter, androidManagedAppRegistrationCollectionResponse: AndroidManagedAppRegistrationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, androidManagedAppRegistrationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", androidManagedAppRegistrationCollectionResponse.value as any, serializeAndroidManagedAppRegistration);
}
