import { CodeIcon } from '@/components/icons'
import { CodeExecutionOutput } from '@/tools/function/execute'
import { BlockConfig } from '../types'

export const FunctionBlock: BlockConfig<CodeExecutionOutput> = {
  type: 'function',
  toolbar: {
    title: 'Function',
    description: 'Add custom logic',
    bgColor: '#FF402F',
    icon: CodeIcon,
    category: 'blocks',
  },
  tools: {
    access: ['function_execute'],
  },
  workflow: {
    inputs: {
      code: { type: 'string', required: true },
      timeout: { type: 'number', required: false },
      memoryLimit: { type: 'number', required: false },
    },
    outputs: {
      response: {
        type: {
          result: 'any',
          stdout: 'string',
          executionTime: 'number',
        },
      },
    },
    subBlocks: [
      {
        id: 'code',
        type: 'code',
        layout: 'full',
      },
    ],
  },
}
