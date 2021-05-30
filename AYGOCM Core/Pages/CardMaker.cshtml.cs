using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AYGOCM_Core.Pages
{
    public class CardMakerModel : PageModel
    {
        private readonly ILogger<CardMakerModel> _logger;

        public CardMakerModel(ILogger<CardMakerModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}
