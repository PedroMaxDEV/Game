/*:
 * @plugindesc Adiciona suporte a botões na tela usando toque (touch input).
 * @author Pedro Max
 * @help
 * Este plugin permite mapear áreas da tela como botões e pressionar 
 * múltiplos botões ao mesmo tempo no RPG Maker MV/MZ.
 *
 * Nenhuma configuração necessária! Assim que o plugin estiver ativado,
 * ele começa a funcionar automaticamente.
 */

(function() {
    var alias_TouchInput_update = TouchInput.update;
    TouchInput.update = function() {
        alias_TouchInput_update.call(this);

        // Botão A (Área 1081x457 a 1189x560)
        if (this.isPressed() && this.x >= 1081 && this.x <= 1189 && this.y >= 457 && this.y <= 560) {
            Input._currentState['a'] = true;
        } else {
            Input._currentState['a'] = false;
        }

        // Botão B (Exemplo: Outra área da tela)
        if (this.isPressed() && this.x >= 1200 && this.x <= 1300 && this.y >= 457 && this.y <= 560) {
            Input._currentState['b'] = true;
        } else {
            Input._currentState['b'] = false;
        }
    };
})();
