import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Hashes extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The CRC32 value of the file in little endian (if available). Read-only. */
    crc32Hash?: string;
    /** The OdataType property */
    odataType?: string;
    /** A proprietary hash of the file that can be used to determine if the contents of the file have changed (if available). Read-only. */
    quickXorHash?: string;
    /** SHA1 hash for the contents of the file (if available). Read-only. */
    sha1Hash?: string;
    /** SHA256 hash for the contents of the file (if available). Read-only. */
    sha256Hash?: string;
}
