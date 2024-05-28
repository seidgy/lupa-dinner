
import { ref } from 'vue'

export const useValidation = () => {
  const errors = ref([])
  const hasErrors = ref(false)

  const validateInput = (inputField) => {
    const validators = inputField.attributes ? inputField.attributes.validate : null
    errors.value[inputField.name] = ''
  
    if (!validators) return

    if (validators.value.includes('email') && !/^\S+@\S+\.\S+$/.test(inputField.value)) {
      hasErrors.value = true
      errors.value[inputField.name] = 'Por favor, informe um email válido'
    }

    if (validators.value.includes('min') && inputField.value.length < inputField.min) {
      hasErrors.value = true
      errors.value[inputField.name] = `O valor mínimo é ${inputField.min}`
    }

    if (validators.value.includes('max') && inputField.value.length > inputField.max) {
      hasErrors.value = true
      errors.value[inputField.name] = `O valor máximo é ${inputField.max}`
    }

    if (validators.value.includes('alpha') && !/^[a-zA-Z]*$/.test(inputField.value)) {
      hasErrors.value = true
      errors.value[inputField.name] = 'Somente caracteres alfabéticos são permitidos'
    }

    if (validators.value.includes('alpha_dash') && !/^[a-zA-Z0-9-_]*$/.test(inputField.value)) {
      hasErrors.value = true
      errors.value[inputField.name] = 'Somente caracteres alfabéticos, números, travessões e sublinhados são permitidos'
    }

    if (validators.value.includes('alpha_num') && !/^[a-zA-Z0-9]*$/.test(inputField.value)) {
      hasErrors.value = true
      errors.value[inputField.name] = 'Somente caracteres alfabéticos e números são permitidos'
    }

    if (validators.value.includes('alpha_spaces') && !/^[a-zA-Z\s]*$/.test(inputField.value)) {
      hasErrors.value = true
      errors.value[inputField.name] = 'Somente caracteres alfabéticos e espaços são permitidos'
    }

    if (validators.value.includes('numeric') && !/^\d+$/.test(inputField.value)) {
      hasErrors.value = true
      errors.value[inputField.name] = 'Somente números são permitidos'
    }

    if (validators.value.includes('required')) {
      if (inputField.type === 'checkbox' || inputField.type === 'radio') {
        const checked = document.querySelectorAll(`input[name="${inputField.name}"]:checked`).length
        if (!checked) {
          hasErrors.value = true
          errors.value[inputField.name] = 'Por favor, selecione uma opção'
          return
        }
      } else if (!inputField.value) {
        hasErrors.value = true
        errors.value[inputField.name] = 'Por favor, informe este campo'
        return
      }
    }

  }
  
  const validateForm = (form) => {
    hasErrors.value = false
    
    for (const field of form.elements) {
      validateInput(field)
    }
  }

  return { errors, validateForm, hasErrors }
}
