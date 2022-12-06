import {RegistryHive} from './registryHive';
import {RegistryOperation} from './registryOperation';
import {RegistryValueType} from './registryValueType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RegistryKeyState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A Windows registry hive : HKEY_CURRENT_CONFIG HKEY_CURRENT_USER HKEY_LOCAL_MACHINE/SAM HKEY_LOCAL_MACHINE/Security HKEY_LOCAL_MACHINE/Software HKEY_LOCAL_MACHINE/System HKEY_USERS/.Default. Possible values are: unknown, currentConfig, currentUser, localMachineSam, localMachineSecurity, localMachineSoftware, localMachineSystem, usersDefault. */
    hive?: RegistryHive;
    /** Current (i.e. changed) registry key (excludes HIVE). */
    key?: string;
    /** The OdataType property */
    odataType?: string;
    /** Previous (i.e. before changed) registry key (excludes HIVE). */
    oldKey?: string;
    /** Previous (i.e. before changed) registry key value data (contents). */
    oldValueData?: string;
    /** Previous (i.e. before changed) registry key value name. */
    oldValueName?: string;
    /** Operation that changed the registry key name and/or value. Possible values are: unknown, create, modify, delete. */
    operation?: RegistryOperation;
    /** Process ID (PID) of the process that modified the registry key (process details will appear in the alert 'processes' collection). */
    processId?: number;
    /** Current (i.e. changed) registry key value data (contents). */
    valueData?: string;
    /** Current (i.e. changed) registry key value name */
    valueName?: string;
    /** Registry key value type REG_BINARY REG_DWORD REG_DWORD_LITTLE_ENDIAN REG_DWORD_BIG_ENDIANREG_EXPAND_SZ REG_LINK REG_MULTI_SZ REG_NONE REG_QWORD REG_QWORD_LITTLE_ENDIAN REG_SZ Possible values are: unknown, binary, dword, dwordLittleEndian, dwordBigEndian, expandSz, link, multiSz, none, qword, qwordlittleEndian, sz. */
    valueType?: RegistryValueType;
}
