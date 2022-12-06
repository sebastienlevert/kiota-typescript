import {IosCertificateProfileCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIosCertificateProfile} from './serializeIosCertificateProfile';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosCertificateProfileCollectionResponse(writer: SerializationWriter, iosCertificateProfileCollectionResponse: IosCertificateProfileCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, iosCertificateProfileCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", iosCertificateProfileCollectionResponse.value as any, serializeIosCertificateProfile);
}
