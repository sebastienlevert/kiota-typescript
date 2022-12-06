import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAppDiagnosticStatus} from '../../../models/deserializeIntoManagedAppDiagnosticStatus';
import {GetManagedAppDiagnosticStatusesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetManagedAppDiagnosticStatusesResponse(getManagedAppDiagnosticStatusesResponse: GetManagedAppDiagnosticStatusesResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getManagedAppDiagnosticStatusesResponse),
        "value": n => { getManagedAppDiagnosticStatusesResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppDiagnosticStatus) as any ; },
    }
}
