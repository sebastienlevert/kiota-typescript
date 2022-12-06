import {FileHash} from './index';
import {ProcessIntegrityLevel} from './processIntegrityLevel';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Process extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** User account identifier (user account context the process ran under) for example, AccountName, SID, and so on. */
    accountName?: string;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The full process invocation commandline including all parameters. */
    commandLine?: string;
    /** Time at which the process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    createdDateTime?: Date;
    /** Complex type containing file hashes (cryptographic and location-sensitive). */
    fileHash?: FileHash;
    /** The integrity level of the process. Possible values are: unknown, untrusted, low, medium, high, system. */
    integrityLevel?: ProcessIntegrityLevel;
    /** True if the process is elevated. */
    isElevated?: boolean;
    /** The name of the process' Image file. */
    name?: string;
    /** The OdataType property */
    odataType?: string;
    /** DateTime at which the parent process was started. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    parentProcessCreatedDateTime?: Date;
    /** The Process ID (PID) of the parent process. */
    parentProcessId?: number;
    /** The name of the image file of the parent process. */
    parentProcessName?: string;
    /** Full path, including filename. */
    path?: string;
    /** The Process ID (PID) of the process. */
    processId?: number;
}
