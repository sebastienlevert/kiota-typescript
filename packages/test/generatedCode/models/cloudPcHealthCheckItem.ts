import {CloudPcConnectivityEventResult} from './cloudPcConnectivityEventResult';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CloudPcHealthCheckItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Additional message for this health check. */
    additionalDetails?: string;
    /** The connectivity health check item name. */
    displayName?: string;
    /** Timestamp when the last check occurs. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 appears as 2014-01-01T00:00:00Z. */
    lastHealthCheckDateTime?: Date;
    /** The result property */
    result?: CloudPcConnectivityEventResult;
}
