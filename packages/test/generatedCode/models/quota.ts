import {StoragePlanInformation} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Quota extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Total space consumed by files in the recycle bin, in bytes. Read-only. */
    deleted?: number;
    /** Total space remaining before reaching the quota limit, in bytes. Read-only. */
    remaining?: number;
    /** Enumeration value that indicates the state of the storage space. Read-only. */
    state?: string;
    /** The storagePlanInformation property */
    storagePlanInformation?: StoragePlanInformation;
    /** Total allowed storage space, in bytes. Read-only. */
    total?: number;
    /** Total space used, in bytes. Read-only. */
    used?: number;
}
