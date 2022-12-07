import {CloudPcConnectivityStatus} from './cloudPcConnectivityStatus';
import {CloudPcHealthCheckItem} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CloudPcConnectivityResult extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A list of failed health check items. If the status property is available, this property will be empty. */
    failedHealthCheckItems?: CloudPcHealthCheckItem[];
    /** The status property */
    status?: CloudPcConnectivityStatus;
    /** Datetime when the status was updated. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as 2014-01-01T00:00:00Z. */
    updatedDateTime?: Date;
}
