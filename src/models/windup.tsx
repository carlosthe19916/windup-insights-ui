export interface ProjectListItem {
    migrationProject: MigrationProject;
    isDeletable?: boolean;
    activeExecutionsCount?: number;
    applicationCount?: number;
}
  
export interface ExtendedMigrationProject extends MigrationProject {
    [key: string]: any;
}

/* tslint:disable */
// Generated using typescript-generator version 2.8.449 on 2019-10-15 16:26:08.

export interface EffortByCategoryDTO {
    categories: EffortCategoryDTO[];
}

export interface EffortCategoryDTO extends StatisticsList {
    categoryID: string;
}

export interface StatisticEntry {
    name: string;
    value: number;
}

export interface StatisticsList {
    entries: StatisticEntry[];
}

export interface ApplicationDetailsDTO {
    traversals: ProjectTraversalReducedDTO[];
    hints: { [index: string]: HintReducedDTO };
    classifications: { [index: string]: ClassificationReducedDTO };
    stringCache: StringCache;
}

export interface ApplicationMessageReducedDTO {
    message: string;
    ruleID: string;
}

export interface ClassificationReducedDTO {
    title: number;
    tags: TagReducedDTO[];
    effort: number;
}

export interface FileReducedDTO {
    fileModelVertexID: any;
    filePath: string;
    name: string;
    tags: TagReducedDTO[];
    hintIDs: any[];
    classificationIDs: any[];
}

export interface HintReducedDTO {
    title: number;
    javaFQCN: number;
    tags: TagReducedDTO[];
    effort: number;
}

export interface ProjectTraversalReducedDTO {
    id: any;
    currentID: any;
    canonicalID: any;
    canonicalFilename: string;
    path: string;
    name: string;
    description: string;
    sha1: string;
    gav: string;
    organization: string;
    url: string;
    messages: ApplicationMessageReducedDTO[];
    files: FileReducedDTO[];
    children: ProjectTraversalReducedDTO[];
}

export interface StringCache {
    byID: { [index: string]: string };
}

export interface TagReducedDTO {
    name: number;
    level: number;
}

export interface AdvancedOption {
    id: number;
    version: number;
    name: string;
    value: string;
}

export interface AdvancedOption_ {
}

export interface AnalysisContext {
    id: number;
    version: number;
    generateStaticReports: boolean;
    cloudTargetsIncluded: boolean;
    linuxTargetsIncluded: boolean;
    openJdkTargetsIncluded: boolean;
    migrationPath: MigrationPath;
    advancedOptions: AdvancedOption[];
    rulesPaths: RulesPath[];
    includePackages: Package[];
    excludePackages: Package[];
    applications: RegisteredApplication[];
}

export interface AnalysisContext_ {
}

export interface Category {
    id: number;
    name: string;
    priority: number;
}

export interface Category_ {
}

export interface Configuration {
    id: number;
    global: boolean;
    version: number;
    rulesPaths: RulesPath[];
}

export interface Configuration_ {
}

export interface FilterApplication {
    id: number;
    fileName: string;
    inputPath: string;
    md5Hash: string;
    sha1Hash: string;
}

export interface FilterApplication_ {
}

export interface MigrationPath {
    id: number;
    name: string;
    source: Technology;
    target: Technology;
}

export interface MigrationPath_ {
}

export interface MigrationProject {
    id: number;
    version: number;
    provisional: boolean;
    title: string;
    description: string;
    created: Calendar;
    lastModified: Calendar;
    applications: RegisteredApplication[];
    executions: WindupExecution[];
    defaultAnalysisContextId: number;
}

export interface MigrationProject_ {
}

export interface Package {
    id: number;
    name: string;
    fullName: string;
    countClasses: number;
    childs: Package[];
    level: number;
    known: boolean;
}

export interface PackageMetadata {
    id: number;
    discoveredDate: Date;
    scanStatus: ScanStatus;
    packageTree: Package[];
}

export interface PackageMetadata_ {
}

export interface Package_ {
}

export interface RegisteredApplication {
    id: number;
    version: number;
    registrationType: RegistrationType;
    title: string;
    fileSize: number;
    inputPath: string;
    exploded: boolean;
    reportIndexPath: string;
    created: Calendar;
    lastModified: Calendar;
    inputFilename: string;
    deleted: boolean;
}

export interface RegisteredApplication_ {
}

export interface ReportFilter {
    id: number;
    selectedApplications: FilterApplication[];
    includeTags: Tag[];
    excludeTags: Tag[];
    includeCategories: Category[];
    excludeCategories: Category[];
    enabled: boolean;
}

export interface ReportFilter_ {
}

export interface RuleEntity {
    id: number;
    version: number;
    ruleID: string;
    ruleContents: string;
}

export interface RuleEntity_ {
}

export interface RuleProviderEntity {
    id: number;
    version: number;
    providerID: string;
    origin: string;
    description: string;
    phase: string;
    dateLoaded: Calendar;
    dateModified: Calendar;
    sources: Technology[];
    targets: Technology[];
    rules: RuleEntity[];
    rulesPath: RulesPath;
    tags: Tag[];
    loadError: string;
    ruleProviderType: RuleProviderType;
}

export interface RuleProviderEntity_ {
}

export interface RulesPath {
    id: number;
    version: number;
    path: string;
    scanRecursively: boolean;
    shortPath: string;
    loadError: string;
    rulesPathType: RulesPathType;
    registrationType: RegistrationType;
    scopeType: ScopeType;
}

export interface RulesPath_ {
}

export interface Tag {
    id: number;
    name: string;
    color: string;
    title: string;
    containedTags: Tag[];
    pseudo: boolean;
    root: boolean;
}

export interface Tag_ {
}

export interface Technology {
    id: number;
    version: number;
    name: string;
    versionRange: string;
}

export interface Technology_ {
}

export interface WindupExecution {
    id: number;
    version: number;
    timeQueued: Calendar;
    timeStarted: Calendar;
    timeCompleted: Calendar;
    outputPath: string;
    totalWork: number;
    workCompleted: number;
    currentTask: string;
    lastModified: Calendar;
    state: ExecutionState;
    filterApplications: FilterApplication[];
    analysisContext: AnalysisContext;
    reportFilter: ReportFilter;
    outputDirectoryName: string;
    applicationListRelativePath: string;
    ruleProvidersExecutionOverviewRelativePath: string;
    projectId: number;
}

export interface WindupExecution_ {
}

export interface WindupSchemaVersion {
    schemaVersion: number;
    dateModified: Calendar;
}

export interface WindupSchemaVersion_ {
}

export interface Calendar extends Cloneable, Comparable<Calendar> {
}

export interface Cloneable {
}

export interface Comparable<T> {
}

export type ExecutionState = "QUEUED" | "STARTED" | "COMPLETED" | "FAILED" | "CANCELLED";

export type ScanStatus = "QUEUED" | "IN_PROGRESS" | "COMPLETE";

export type RegistrationType = "UPLOADED" | "PATH";

export type RuleProviderType = "JAVA" | "XML" | "GROOVY";

export type RulesPathType = "SYSTEM_PROVIDED" | "USER_PROVIDED";

export type ScopeType = "GLOBAL" | "PROJECT";
