package br.com.example.produtos.controle;

import org.springframework.web.bind.annotation.RestController;

import br.com.example.produtos.modelo.ProdutoModelo;
import br.com.example.produtos.modelo.RespostaModelo;
import br.com.example.produtos.servico.ProdutoServico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@CrossOrigin(origins = "*")
public class ProdutoControle {
    @Autowired
    private ProdutoServico ps;

    @PostMapping("/cadastrar")
    public ResponseEntity<?>cadastrar(@RequestBody ProdutoModelo pm) {
        
         return ps.cadastrar(pm);
    }
    
    @GetMapping("/listar")
    public Iterable<ProdutoModelo> listar() {
        return ps.listar();
    }

    @GetMapping("")
    public String rota() {
        return "api de produtos funcionando!";
    }

  @DeleteMapping("/remover/{codigo}")
  public ResponseEntity<RespostaModelo> remover(@PathVariable long codigo) {
      return ps.remover(codigo);
  }
  

}
